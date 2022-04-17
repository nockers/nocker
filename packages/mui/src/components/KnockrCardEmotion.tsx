import { WidgetEmotion, WidgetGrade } from "@knockr/client"
import { Paper, Stack, Typography } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"
import { useClient } from "../hooks"
import { KnockrFormEmotion } from "./KnockrFormEmotion"

type Props = {
  path?: string
  onSubmitted?(emotion: WidgetEmotion): void
  onError?(error: Error): void
}

export const KnockrCardEmotion: VFC<Props> = (props) => {
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
    <Paper>
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography fontSize={14} color={"text.secondary"}>
          {"どのような気分ですか？"}
        </Typography>
        <KnockrFormEmotion
          emotionGrade={grade}
          textMessage={"回答ありがとうございます"}
          onSelect={(grade) => {
            onSubmit(grade)
          }}
        />
      </Stack>
    </Paper>
  )
}
