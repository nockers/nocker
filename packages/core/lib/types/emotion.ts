import { EmotionGrade } from "./emotionGrade"
import { Environment } from "./environment"

export type Emotion = {
  id: string
  environment: Environment
  grade: EmotionGrade
  gradeSum: number | null
  type: string
  slug: string | null
  pagePath: string
  pageTitle: string | null
  projectId: string
  customerId: string
  ticketId: string | null
  surveyId: string | null
}
