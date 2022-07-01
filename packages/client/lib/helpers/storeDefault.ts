import { Environment } from "@nocker/core"
import { RecordToken } from "../types/recordToken"
import { Database } from "./database"

export class StoreDefault extends Database {
  constructor(
    private config: {
      projectId: string
      environment: Environment
    },
  ) {
    super()
  }

  override onUpgradeneeded(request: IDBOpenDBRequest) {
    const database = request.result
    database.createObjectStore("tokens", { keyPath: "id" })
  }

  async writeAccessToken(accessToken: string) {
    await this.putRecord<RecordToken>("tokens", {
      id: `${this.config.projectId}.${this.config.environment}.access`,
      value: accessToken,
      type: "access",
      projectId: this.config.projectId,
      environment: this.config.environment,
    })
    return null
  }

  async writeRefreshToken(refreshToken: string) {
    await this.putRecord<RecordToken>("tokens", {
      id: `${this.config.projectId}.${this.config.environment}.refresh`,
      value: refreshToken,
      type: "refresh",
      projectId: this.config.projectId,
      environment: this.config.environment,
    })
    return null
  }

  async readAccessToken() {
    const record = await this.getRecord<RecordToken>(
      "tokens",
      `${this.config.projectId}.${this.config.environment}.access`,
    )
    return record?.value ?? null
  }

  async readRefreshToken() {
    const record = await this.getRecord<RecordToken>(
      "tokens",
      `${this.config.projectId}.${this.config.environment}.refresh`,
    )
    return record?.value ?? null
  }

  async writeTokens(accessToken: string, refreshToken: string): Promise<void> {
    await this.writeAccessToken(accessToken)
    await this.writeRefreshToken(refreshToken)
  }

  async removeTokens() {
    await this.deleteRecord(
      "tokens",
      `${this.config.projectId}.${this.config.environment}.access`,
    )
    await this.deleteRecord(
      "tokens",
      `${this.config.projectId}.${this.config.environment}.refresh`,
    )
    return null
  }
}
