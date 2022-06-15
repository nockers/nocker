import type { Emotion, EmotionGrade } from "@nocker/client"
import { captureException } from "@sentry/hub"
import { useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { WidgetEmotionSubmit } from "../types"

type Props = {
  pagePath?: string | null
  pageTitle?: string | null
  emotionType: "FIVE" | "TWO" | "ONE"
  onSubmitted?(emotion: Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
  ticketId?(): string | null
}

export const useMutationEmotion = (props: Props) => {
  const config = useContext(ConfigContext)

  const [emotionId, setEmotionId] = useState<string | null>(null)

  const [emotionGrade, setEmotionGrade] = useState<EmotionGrade | null>(null)

  const isDone = emotionGrade !== null

  const createEmotion = async (emotionGrade: EmotionGrade) => {
    setEmotionGrade(emotionGrade)
    if (config.isLoggingIn) return
    if (config.client !== null) {
      const ticketId = props.ticketId?.()
      const emotion = await config.client.emotions().create({
        pagePath: props.pagePath || window.location.pathname,
        type: props.emotionType,
        grade: emotionGrade,
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
        type: props.emotionType,
        grade: emotionGrade,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
      }
      props.onSubmit?.(emotion)
    }
  }

  const reset = () => {
    setEmotionId(null)
    setEmotionGrade(null)
  }

  return {
    emotionId,
    emotionGrade,
    isDone,
    createEmotion,
    reset,
  }
}
