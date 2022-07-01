import { Ticket } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

export type ReadHelpsParams = {
  text?: string
}

/**
 * ヘルプ
 */
export class ClientHelps extends Client {
  constructor(config: Config) {
    super(config)
  }

  /**
   * チケットを取得する
   * @param params
   * @returns
   */
  async read(params: ReadHelpsParams) {
    if (0 < this.state.helps.length) {
      return this.state.helps
    }

    if (typeof params.text === "string") {
      return this.call<Ticket[], null>({
        method: "GET",
        path: `/helps?text=${params.text}`,
      })
    }

    return this.call<Ticket[], null>({
      method: "GET",
      path: "/helps",
    })
  }
}
