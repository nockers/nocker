export type WidgetConfig = {
  emotionQuestionMessage: string
  emotionThanksMessage: string
  ticketInputPlaceholder: string
  ticketThanksMessage: string
  ticketButtonSubmitText: string
  ticketButtonResetText: string
  emotionFiveGradeOneMessage: string
  emotionFiveGradeTwoMessage: string
  emotionFiveGradeThreeMessage: string
  emotionFiveGradeFourMessage: string
  emotionFiveGradeFiveMessage: string
  emotionTwoGradeOneMessage: string
  emotionTwoGradeTwoMessage: string
  emotionOneButtonText: string
  hasEmotionQuestionMessage: boolean
  fabType: "DEFAULT" | "TEXT" | "ICON" | "TEXT-WITH-ICON"
  fabText: string | null
  fabIcon: string | null
  emotionType: "FIVE" | "TWO" | "ONE" | null
  isMinimal: boolean
  hasBorder: boolean
  hasHelps: boolean
}
