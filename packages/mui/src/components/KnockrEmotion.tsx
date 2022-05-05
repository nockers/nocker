import { WidgetEmotion, WidgetGrade } from "@knockr/client"
import { Box, Card, Stack, Typography } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"
import { useClient } from "../hooks"
import { KnockrFormEmotion } from "./KnockrFormEmotion"

type Props = {
  pagePath?: string
  pageTitle?: string
  textQuestion?: string | null
  textThanks?: string | null
  hasBorder?: boolean | null
  onSubmitted?(emotion: WidgetEmotion): void
  onError?(error: Error): void
  isStandalone?: boolean
}

export const KnockrEmotion: VFC<Props> = (props) => {
  const client = useClient()

  const [grade, setGrade] = useState<WidgetGrade | null>(null)

  const onSubmit = async (grade: WidgetGrade) => {
    setGrade(grade)
    const emotion = await client.emotions().create({
      pagePath: props.pagePath ?? window.location.pathname,
      type: "FIVE",
      grade,
      slug: null,
      ticketId: null,
    })
    if (emotion instanceof Error) {
      captureException(emotion)
      props.onError?.(emotion)
      return
    }
    props.onSubmitted?.(emotion)
  }

  const hasText =
    typeof props.textQuestion === "string" && 0 < props.textQuestion.length

  const hasBorder = props.hasBorder ?? true

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: (theme) => theme.spacing(40),
        borderWidth: hasBorder ? 1 : 0,
      }}
    >
      <Stack sx={{ width: "100%" }}>
        {hasText && (
          <Box sx={{ pt: 2, px: 2 }}>
            <Typography
              fontSize={14}
              color={"text.secondary"}
              sx={{ lineHeight: "22px" }}
            >
              {props.textQuestion ?? "どのような気分ですか？"}
            </Typography>
          </Box>
        )}
        <Box sx={{ pt: 0.5, pb: 0.75, px: 0.75 }}>
          <KnockrFormEmotion
            grade={grade}
            textMessage={props.textThanks ?? "回答ありがとうございます"}
            onSelect={(grade) => {
              onSubmit(grade)
            }}
          />
        </Box>
      </Stack>
    </Card>
  )
}
