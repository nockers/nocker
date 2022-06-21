export type WidgetConfig = {
  emotionFiveGradeFiveMessage: string
  emotionFiveGradeFourMessage: string
  emotionFiveGradeOneMessage: string
  emotionFiveGradeThreeMessage: string
  emotionFiveGradeTwoMessage: string
  emotionOneButtonText: string
  emotionQuestionMessage: string
  emotionThanksMessage: string
  emotionTwoGradeOneMessage: string
  emotionTwoGradeTwoMessage: string
  emotionType: "FIVE" | "TWO" | "ONE" | null
  fabIcon: string | null
  fabText: string | null
  fabType: "DEFAULT" | "TEXT" | "ICON" | "TEXT_WITH_ICON"
  hasBorder: boolean
  hasEmotionQuestionMessage: boolean
  hasHelps: boolean
  isMinimal: boolean
  ticketButtonResetText: string
  ticketButtonSubmitText: string
  ticketInputPlaceholder: string
  ticketThanksMessage: string
}
