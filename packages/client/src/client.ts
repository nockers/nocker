import { captureException } from "@sentry/minimal"
import { InternalError } from "./errors"
import { UnauthorizedError } from "./errors/unauthorizedError"
import { Store } from "./store"
import { Config, WidgetEnvironment, WidgetLogin } from "./types"

type LoginData = {
  environment: WidgetEnvironment
}

export class Client {
  readonly store: Store

  readonly environment: WidgetEnvironment

  readonly projectId: string

  readonly baseURL: string

  constructor(config: Config) {
    this.projectId = config.projectId
    this.environment = config.environment ?? "PRODUCTION"
    this.baseURL = config.baseURL ?? "https://knocker.app/api"
    this.store =
      config.store ??
      new Store({
        projectId: config.projectId,
        environment: config.environment ?? "PRODUCTION",
      })
  }

  protected async call<T, U>(props: {
    method: "POST" | "PUT" | "GET"
    path: string
    body?: U
  }): Promise<T | Error> {
    try {
      const token = await this.store.readAccessToken()

      const data = await this.fetch<T, U>({
        method: props.method,
        path: props.path,
        body: props.body,
        token,
      })

      // 認証エラー
      if (data instanceof UnauthorizedError) {
        const refresh = await this.relogin()
        if (refresh instanceof Error) {
          return refresh
        }
        const token = await this.store.readAccessToken()
        return await this.fetch<T, U>({
          method: props.method,
          path: props.path,
          body: props.body,
          token,
        })
      }

      return data
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        return new Error(error.message)
      }
      return new Error("UNEXPECTED_ERROR")
    }
  }

  protected async fetch<T, U>(props: {
    method: "POST" | "PUT" | "GET"
    path: string
    token: string | null
    body?: U
  }): Promise<T | Error> {
    try {
      const endpoint = `${this.baseURL}/widgets/${this.projectId}/${props.path}`

      const response = await fetch(endpoint, {
        method: props.method,
        body: props.body ? JSON.stringify(props.body) : null,
        headers: props.token
          ? {
              "Content-Type": "application/json",
              Authorization: `Bearer ${props.token}`,
            }
          : { "Content-Type": "application/json" },
      })

      const json = await response.json()

      // 認証エラー
      if (response.status === 401) {
        return new UnauthorizedError()
      }

      if (response.status !== 200 && response.status !== 201) {
        return new Error(json.message)
      }

      return json as T
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        return new Error(error.message)
      }
      return new Error("UNEXPECTED_ERROR")
    }
  }

  async login() {
    const token = await this.store.readAccessToken()

    const data = await this.fetch<WidgetLogin, { environment: string }>({
      method: "POST",
      path: "login",
      token,
      body: { environment: this.environment },
    })

    // アクセストークンの更新に失敗した場合
    if (data instanceof UnauthorizedError) {
      return await this.relogin()
    }

    if (data instanceof Error) {
      return data
    }

    if (data.accessToken !== null && data.refreshToken !== null) {
      await this.store.writeTokens(data.accessToken, data.refreshToken)
    }

    return data
  }

  async relogin() {
    const token = await this.store.readRefreshToken()

    const data = await this.fetch<WidgetLogin, LoginData>({
      method: "POST",
      path: "login",
      token: token,
      body: { environment: this.environment },
    })

    // アクセストークンの更新に失敗した場合
    if (data instanceof UnauthorizedError) {
      await this.store.removeTokens()
      // ログインする
      return await this.fetch<WidgetLogin, LoginData>({
        method: "POST",
        path: "login",
        token: null,
        body: { environment: this.environment },
      })
    }

    if (data instanceof Error) {
      return data
    }

    if (data.accessToken === null || data.refreshToken === null) {
      return new InternalError("トークンの取得に失敗した")
    }

    await this.store.writeTokens(data.accessToken, data.refreshToken)

    return data
  }
}
