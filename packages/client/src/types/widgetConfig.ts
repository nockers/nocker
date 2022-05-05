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
  fabText: string | null
  fabIcon: string | null
  emotionType: "ONE" | "TWO" | "FIVE" | null
  isMinimal: boolean
}
