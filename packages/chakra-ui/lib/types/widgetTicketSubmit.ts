import type { EmotionGrade, TicketType } from "@nocker/client"

export type WidgetTicketSubmit = {
  type: TicketType | null
  text: string
  imageText: string | null
  pagePath: string
  pageTitle: string | null
  emotionGrade: EmotionGrade | null
  emotionType: string | null
}
