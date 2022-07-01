import { Help } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

/**
 * ユーザ
 */
export class ClientCustomer extends Client {
  constructor(config: Config, private customerId: string) {
    super(config)
  }

  /**
   * ユーザを取得する
   * @returns
   */
  async read() {
    return this.call<Help, null>({
      method: "GET",
      path: `/customers/${this.customerId}`,
    })
  }
}
