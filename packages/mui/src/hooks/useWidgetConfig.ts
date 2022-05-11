import { WidgetConfig } from "@knockr/client"
import { useContext } from "react"
import { WidgetContext } from "../contexts"

type EnhancedWidgetConfig = WidgetConfig & {
  hasEmotionQuestionMessage: boolean
}

export const useWidgetConfig = (
  widgetConfig?: WidgetConfig | null
): EnhancedWidgetConfig => {
  const widget = useContext(WidgetContext)

  const remoteConfig = widget.widgetConfig

  const emotionQuestionMessage =
    widgetConfig?.emotionQuestionMessage ?? remoteConfig.emotionQuestionMessage

  const hasEmotionQuestionMessage = 0 < emotionQuestionMessage.length

  return {
    hasEmotionQuestionMessage,
    ticketInputPlaceholder:
      widgetConfig?.ticketInputPlaceholder ??
      remoteConfig.ticketInputPlaceholder,
    ticketThanksMessage:
      widgetConfig?.ticketThanksMessage ?? remoteConfig.ticketThanksMessage,
    ticketButtonSubmitText:
      widgetConfig?.ticketButtonSubmitText ??
      remoteConfig.ticketButtonSubmitText,
    ticketButtonResetText:
      widgetConfig?.ticketButtonResetText ?? remoteConfig.ticketButtonResetText,
    emotionQuestionMessage,
    emotionThanksMessage:
      widgetConfig?.emotionThanksMessage ?? remoteConfig.emotionThanksMessage,
    emotionFiveGradeOneMessage:
      widgetConfig?.emotionFiveGradeOneMessage ??
      remoteConfig.emotionFiveGradeOneMessage,
    emotionFiveGradeTwoMessage:
      widgetConfig?.emotionFiveGradeTwoMessage ??
      remoteConfig.emotionFiveGradeTwoMessage,
    emotionFiveGradeThreeMessage:
      widgetConfig?.emotionFiveGradeThreeMessage ??
      remoteConfig.emotionFiveGradeThreeMessage,
    emotionFiveGradeFourMessage:
      widgetConfig?.emotionFiveGradeFourMessage ??
      remoteConfig.emotionFiveGradeFourMessage,
    emotionFiveGradeFiveMessage:
      widgetConfig?.emotionFiveGradeFiveMessage ??
      remoteConfig.emotionFiveGradeFiveMessage,
    emotionTwoGradeOneMessage:
      widgetConfig?.emotionTwoGradeOneMessage ??
      remoteConfig.emotionTwoGradeOneMessage,
    emotionTwoGradeTwoMessage:
      widgetConfig?.emotionTwoGradeTwoMessage ??
      remoteConfig.emotionTwoGradeTwoMessage,
    emotionOneButtonText:
      widgetConfig?.emotionOneButtonText ?? remoteConfig.emotionOneButtonText,
    fabText: widgetConfig?.fabText ?? remoteConfig.fabText,
    fabIcon: widgetConfig?.fabIcon ?? remoteConfig.fabIcon,
    emotionType: widgetConfig?.emotionType ?? remoteConfig.emotionType,
    isMinimal: widgetConfig?.isMinimal ?? remoteConfig.isMinimal,
    hasBorder: widgetConfig?.hasBorder ?? remoteConfig.hasBorder,
    hasHelps: widgetConfig?.hasHelps ?? remoteConfig.hasHelps,
  }
}
