import { captureException } from "@sentry/minimal"
import { Config, WidgetEnvironment } from "./types"

export class Client {
  /**
   * 環境
   */
  readonly environment: WidgetEnvironment

  /**
   * プロジェクトID
   */
  readonly projectId: string

  /**
   * URL
   */
  readonly baseURL: string

  constructor(config: Config) {
    this.projectId = config.projectId
    this.environment = config.environment ?? "PRODUCTION"
    this.baseURL = config.baseURL ?? "https://knocker.app/api"
  }

  protected async post<T, U>(props: {
    url: string
    data: T
  }): Promise<U | Error> {
    try {
      const response = await fetch(props.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.data),
      })

      if (response.status !== 200 && response.status !== 201) {
        return new Error()
      }

      const json = await response.json()

      return json as U
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        return new Error(error.message)
      }
      return new Error("UNEXPECTED_ERROR")
    }
  }

  protected async get<T>(props: { url: string }): Promise<T | Error> {
    try {
      const response = await fetch(props.url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })

      if (response.status !== 200 && response.status !== 201) {
        return new Error()
      }

      const json = await response.json()

      return json as T
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        return new Error(error.message)
      }
      return new Error("UNEXPECTED_ERROR")
    }
  }

  protected async put<T, U>(props: {
    url: string
    data: T
  }): Promise<U | Error> {
    try {
      const response = await fetch(props.url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props.data),
      })

      if (response.status !== 200 && response.status !== 201) {
        return new Error()
      }

      const json = await response.json()

      return json as U
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        return new Error(error.message)
      }
      return new Error("UNEXPECTED_ERROR")
    }
  }
}
