import { Client } from "./client"
import { Config } from "./types"

export class Emotion extends Client {
  constructor(config: Config, private emotionId: string) {
    super(config)
  }
}
