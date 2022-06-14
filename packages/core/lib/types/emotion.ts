import { EmotionGrade } from "./emotionGrade"
import { Environment } from "./environment"

export type Emotion = {
  id: string
  environment: Environment
  grade: EmotionGrade
  gradeSum: number | null
  type: string
  pagePath: string | null
  pageTitle: string | null
  projectId: string
  customerId: string
  ticketId: string | null
  surveyId: string | null
}
