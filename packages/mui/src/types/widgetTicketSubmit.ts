import { WidgetGrade, WidgetTicketType } from "@nocker/client"

export type WidgetTicketSubmit = {
  type: WidgetTicketType | null
  text: string
  imageText: string | null
  pagePath: string
  pageTitle: string | null
  emotionGrade: WidgetGrade | null
  emotionType: string | null
}
