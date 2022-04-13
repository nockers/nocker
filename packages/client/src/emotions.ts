import { Client } from "./client"
import { Config, WidgetEmotion, WidgetGrade } from "./types"

export type CreateEmotionRequest = {
  path: string
  grade: WidgetGrade | null
  ticketId: string | null
}

export type CreateEmotionResponse = WidgetEmotion

export class Emotions extends Client {
  constructor(config: Config) {
    super(config)
  }

  async create(data: CreateEmotionRequest) {
    return this.post<CreateEmotionRequest, CreateEmotionResponse>({
      url: `${this.baseURL}/widgets/${this.projectId}/emotions`,
      data,
    })
  }
}
