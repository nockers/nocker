import type { WidgetConfig } from "@nocker/client"
import { useContext } from "react"
import { ConfigContext } from "../contexts"

export const useWidgetConfig = (
  override?: Partial<WidgetConfig> | null,
): WidgetConfig => {
  const widget = useContext(ConfigContext)

  const remoteConfig = widget.widgetConfig

  const emotionQuestionMessage =
    override?.emotionQuestionMessage ?? remoteConfig.emotionQuestionMessage

  const hasEmotionQuestionMessage = 0 < emotionQuestionMessage.length

  return {
    ...remoteConfig,
    ...override,
    hasEmotionQuestionMessage,
  }
}
