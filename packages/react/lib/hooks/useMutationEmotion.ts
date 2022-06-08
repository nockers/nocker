import { WidgetEmotion, WidgetGrade } from "@nocker/client"
import { captureException } from "@sentry/hub"
import { useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { WidgetEmotionSubmit } from "../types"

type Props = {
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(emotion: WidgetEmotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
  ticketId?(): string | null
}

export const useMutationEmotion = (props: Props) => {
  const config = useContext(ConfigContext)

  const [emotionId, setEmotionId] = useState<string | null>(null)

  const [emotionGrade, setEmotionGrade] = useState<WidgetGrade | null>(null)

  const isDone = emotionGrade !== null

  const onCreateEmotion = async (grade: WidgetGrade) => {
    if (config.isLoggingIn) return
    setEmotionGrade(grade)
    if (config.client !== null) {
      const ticketId = props.ticketId?.()
      const emotion = await config.client.emotions().create({
        pagePath: props.pagePath || window.location.pathname,
        type: "FIVE",
        grade,
        slug: null,
        ticketId,
      })
      if (emotion instanceof Error) {
        captureException(emotion)
        props.onError?.(emotion)
        return
      }
      props.onSubmitted?.(emotion)
      setEmotionId(emotion.id)
    }
    if (config.client === null) {
      const emotion: WidgetEmotionSubmit = {
        type: "FIVE",
        grade,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
      }
      props.onSubmit?.(emotion)
    }
  }

  return {
    emotionId,
    emotionGrade,
    isDone,
    onCreateEmotion,
  }
}
