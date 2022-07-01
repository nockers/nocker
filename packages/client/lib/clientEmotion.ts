import { Emotion } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

export class ClientEmotion extends Client {
  constructor(config: Config, private emotionId: string) {
    super(config)
  }

  /**
   * エモーションを取得する
   * @returns
   */
  async read() {
    return this.call<Emotion, null>({
      method: "GET",
      path: `/emotions/${this.emotionId}`,
    })
  }
}
