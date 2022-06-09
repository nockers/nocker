import { Client } from "./client"
import { Config, Emotion, EmotionGrade } from "./types"

export type CreateEmotionData = {
  type: "ONE" | "TWO" | "FIVE"
  grade: EmotionGrade
  slug?: string | null
  pagePath: string
  pageTitle?: string | null
  appVersion?: string | null
  ticketId?: string | null
}

export type ReadEmotionParams = {
  slug?: string
  surveyId?: string
}

export class ClientEmotions extends Client {
  constructor(config: Config) {
    super(config)
  }

  async create(data: CreateEmotionData) {
    return await this.call<Emotion, CreateEmotionData>({
      method: "POST",
      path: "emotions",
      body: data,
    })
  }

  async read(params: ReadEmotionParams) {
    if (typeof params.slug === "string") {
      return this.call<Emotion[], null>({
        method: "GET",
        path: `emotions?slug=${params.slug}`,
      })
    }

    return this.call<Emotion[], null>({
      method: "GET",
      path: "emotions",
    })
  }
}
