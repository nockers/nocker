import { Config, Environment } from "./types"

export class Client {
  readonly environment: Environment

  readonly projectId: string

  readonly baseURL: string

  constructor(config: Config) {
    this.projectId = config.projectId

    this.environment = config.environment ?? "PRODUCTION"

    this.baseURL = config.baseURL ?? "https://knocker.app/api"
  }

  async post<T, U>(props: { url: string; data: T }): Promise<U | Error> {
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
      if (error instanceof Error) {
        return new Error(error.message)
      }

      return new Error()
    }
  }
}
