import { Client } from "./client"
import { Config, WidgetEmotion, WidgetGrade } from "./types"

export type CreateEmotionData = {
  type: "ONE" | "TWO" | "FIVE"
  grade: WidgetGrade
  slug?: string | null
  pagePath: string
  pageTitle?: string | null
  appPlatform?: string | null
  appVersion?: string | null
  appDevice?: string | null
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
    return this.post<CreateEmotionData, WidgetEmotion>({
      url: `${this.baseURL}/widgets/${this.projectId}/emotions`,
      data,
    })
  }

  async read(params: ReadEmotionParams) {
    if (typeof params.slug === "string") {
      return this.get<WidgetEmotion[]>({
        url: `${this.baseURL}/widgets/${this.projectId}/emotions?slug=${params.slug}`,
      })
    }

    return this.get<WidgetEmotion[]>({
      url: `${this.baseURL}/widgets/${this.projectId}/emotions`,
    })
  }
}
