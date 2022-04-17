import { WidgetEmotion, WidgetGrade } from "@knockr/client"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"
import { useClient } from "../hooks"
import { KnockrFormEmotion } from "./KnockrFormEmotion"

type Props = {
  path?: string
  onSubmitted?(emotion: WidgetEmotion): void
  onError?(error: Error): void
}

export const KnockrEmotion: VFC<Props> = (props) => {
  const client = useClient()

  const [grade, setGrade] = useState<WidgetGrade | null>(null)

  const onSubmit = async (grade: WidgetGrade) => {
    setGrade(grade)
    const emotion = await client.emotions().create({
      path: props.path ?? window.location.pathname,
      grade,
      ticketId: null,
    })
    if (emotion instanceof Error) {
      captureException(emotion)
      props.onError?.(emotion)
      return
    }
    props.onSubmitted?.(emotion)
  }

  return (
    <KnockrFormEmotion
      emotionGrade={grade}
      textMessage={"回答ありがとうございます"}
      onSelect={(grade) => {
        onSubmit(grade)
      }}
    />
  )
}
