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
    try {
      setEmotionGrade(emotionGrade)
      if (config.client !== null) {
        const isNotLoggedIn = await config.client.isNotLoggedIn()
        if (isNotLoggedIn) {
          const login = await config.client.login()
          config.setCustomer(login?.customer)
        }
        const ticketId = props.ticketId?.()
        const emotion = await config.client.emotions().create({
          type: props.emotionType,
          pagePath: props.pagePath || window.location.pathname,
          pageTitle: window.document.title,
          grade: emotionGrade,
          ticketId,
        })
        props.onSubmitted?.(emotion)
        setEmotionId(emotion.id)
      }
      if (config.client === null) {
        const emotion: WidgetEmotionSubmit = {
          type: props.emotionType,
          pagePath: props.pagePath || window.location.pathname,
          pageTitle: window.document.title,
          grade: emotionGrade,
        }
        props.onSubmit?.(emotion)
      }
    } catch (error) {
      captureException(error)
      if (error instanceof Error) {
        props.onError?.(error)
      }
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
