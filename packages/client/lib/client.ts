import { Environment, Login } from "@nocker/core"
import { captureException } from "@sentry/hub"
import { InternalError, UnauthorizedError } from "./errors"
import { State } from "./state"
import { StoreDefault } from "./storeDefault"
import { Config } from "./types"

type LoginData = {
  environment: Environment
}

export class Client {
  readonly store: StoreDefault

  readonly environment: Environment

  readonly projectId: string

  readonly baseURL: string

  readonly state: State

  constructor(config: Config) {
    const store = new StoreDefault({
      projectId: config.projectId,
      environment: config.environment ?? "PRODUCTION",
    })
    this.projectId = config.projectId
    this.environment = config.environment ?? "PRODUCTION"
    this.baseURL = config.baseURL ?? "https://nocker.app/api"
    this.store = config.store ?? store
    this.state = new State()
  }

  protected async call<T, U>(props: {
    method: "POST" | "PUT" | "GET"
    path: string
    body?: U
  }): Promise<Awaited<T>> {
    const token = await this.store.readAccessToken()

    const data = await this.fetch<T, U>({
      method: props.method,
      path: props.path,
      body: props.body,
      token,
    })

    // 認証エラー
    if (data instanceof UnauthorizedError) {
      const refresh = await this.refreshToken()

      if (refresh instanceof Error) {
        throw refresh
      }

      const token = await this.store.readAccessToken()

      // リクエストを送信する
      const result = await this.fetch<T, U>({
        method: props.method,
        path: props.path,
        body: props.body,
        token,
      })

      if (result instanceof Error) {
        throw result
      }

      return result
    }

    if (data instanceof Error) {
      throw data
    }

    return data
  }

  /**
   * リクエストを送信する
   * @param props
   * @returns
   */
  protected async fetch<T, U>(props: {
    method: "POST" | "PUT" | "GET"
    path: string
    token: string | null
    body?: U
  }): Promise<T | Error> {
    try {
      const endpoint = `${this.baseURL}/widgets/${this.projectId}/${props.path}`

      const resp = await fetch(endpoint, {
        method: props.method,
        body: props.body ? JSON.stringify(props.body) : null,
        headers: props.token
          ? {
              "Content-Type": "application/json",
              Authorization: `Bearer ${props.token}`,
            }
          : { "Content-Type": "application/json" },
      })

      const json = await resp.json()

      // 認証エラー
      if (resp.status === 401) {
        return new UnauthorizedError()
      }

      if (resp.status !== 200 && resp.status !== 201) {
        return new Error(json.message)
      }

      return json as T
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        return new Error(error.message)
      }
      return new Error()
    }
  }

  /**
   * アクセストークンがある場合はログインする
   * @returns
   */
  async boot() {
    if (this.state.isBooted) {
      throw new Error("Already booted")
    }

    this.state.boot()

    const token = await this.store.readAccessToken()

    if (token === null) {
      return null
    }

    return await this.login()
  }

  /**
   * ログインする
   * @returns
   */
  async login() {
    const token = await this.store.readAccessToken()

    const data = await this.fetch<Login, { environment: string }>({
      method: "POST",
      path: "login",
      token,
      body: { environment: this.environment },
    })

    // 認証に失敗した場合
    if (data instanceof UnauthorizedError) {
      return await this.refreshToken()
    }

    // リトライする
    if (data instanceof Error) {
      return await this.retryLogin()
    }

    // アクセストークンがあれば書き込む
    if (data.accessToken !== null && data.refreshToken !== null) {
      await this.store.writeTokens(data.accessToken, data.refreshToken)
    }

    return data
  }

  /**
   * リトライする
   * @returns
   */
  async retryLogin() {
    const token = await this.store.readAccessToken()

    const data = await this.fetch<Login, { environment: string }>({
      method: "POST",
      path: "login",
      token,
      body: { environment: this.environment },
    })

    if (data instanceof UnauthorizedError) {
      return await this.refreshToken()
    }

    if (data instanceof Error) {
      throw new InternalError()
    }

    if (data.accessToken !== null && data.refreshToken !== null) {
      await this.store.writeTokens(data.accessToken, data.refreshToken)
    }

    return data
  }

  /**
   * アクセストークンを更新する
   * @returns
   */
  async refreshToken() {
    const token = await this.store.readRefreshToken()

    const data = await this.fetch<Login, LoginData>({
      method: "POST",
      path: "login",
      token: token,
      body: { environment: this.environment },
    })

    // アクセストークンの更新に失敗した場合
    if (data instanceof UnauthorizedError) {
      return await this.refetchToken()
    }

    if (data instanceof Error) {
      throw new InternalError()
    }

    if (data.accessToken === null || data.refreshToken === null) {
      throw new InternalError()
    }

    await this.store.writeTokens(data.accessToken, data.refreshToken)

    return data
  }

  /**
   * アクセストークンを再取得する
   * @returns
   */
  async refetchToken() {
    await this.store.removeTokens()

    // ログインする
    const data = await this.fetch<Login, LoginData>({
      method: "POST",
      path: "login",
      token: null,
      body: { environment: this.environment },
    })

    if (data instanceof Error) {
      throw new InternalError()
    }

    if (data.accessToken === null || data.refreshToken === null) {
      throw new InternalError()
    }

    await this.store.writeTokens(data.accessToken, data.refreshToken)

    return data
  }

  async isLoggedIn() {
    const token = await this.store.readAccessToken()

    return token !== null
  }
}
