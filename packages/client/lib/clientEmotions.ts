import { Emotion, EmotionGrade } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

export type CreateEmotionData = {
  type: "ONE" | "TWO" | "FIVE"
  grade: EmotionGrade
  pagePath?: string | null
  pageTitle?: string | null
  appVersion?: string | null
  tags?: string[]
  ticketId?: string | null
}

export type ReadEmotionsParams = {
  surveyId?: string
}

/**
 * エモーション
 */
export class ClientEmotions extends Client {
  constructor(config: Config) {
    super(config)
  }

  /**
   * エモーションを作成する
   * @param data
   * @returns
   */
  async create(data: CreateEmotionData) {
    return await this.call<Emotion, CreateEmotionData>({
      method: "POST",
      path: "/emotions",
      body: data,
    })
  }

  /**
   * エモーションを取得する
   * @param params
   * @returns
   */
  async read(params: ReadEmotionsParams) {
    if (typeof params.surveyId === "string") {
      return this.call<Emotion[], null>({
        method: "GET",
        path: `/emotions?surveyId=${params.surveyId}`,
      })
    }

    return this.call<Emotion[], null>({
      method: "GET",
      path: "/emotions",
    })
  }
}
