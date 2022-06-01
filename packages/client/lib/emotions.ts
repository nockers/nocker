import { Client } from "./client"
import { Config, WidgetEmotion, WidgetGrade } from "./types"

export type CreateEmotionData = {
  type: "ONE" | "TWO" | "FIVE"
  grade: WidgetGrade
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

export class Emotions extends Client {
  constructor(config: Config) {
    super(config)
  }

  async create(data: CreateEmotionData) {
    return await this.call<WidgetEmotion, CreateEmotionData>({
      method: "POST",
      path: "emotions",
      body: data,
    })
  }

  async read(params: ReadEmotionParams) {
    if (typeof params.slug === "string") {
      return this.call<WidgetEmotion[], null>({
        method: "GET",
        path: `emotions?slug=${params.slug}`,
      })
    }

    return this.call<WidgetEmotion[], null>({
      method: "GET",
      path: "emotions",
    })
  }
}
