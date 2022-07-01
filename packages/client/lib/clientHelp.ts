import { Help } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

/**
 * ヘルプ
 */
export class ClientHelp extends Client {
  constructor(config: Config, private helpId: string) {
    super(config)
  }

  /**
   * ヘルプを取得する
   * @returns
   */
  async read() {
    return this.call<Help, null>({
      method: "GET",
      path: `/helps/${this.helpId}`,
    })
  }
}
