import { Box, Card, Stack, Typography } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetGrade } from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { WidgetEmotionSubmit } from "../types"
import { NockerFormEmotion } from "./box/BoxFormEmotion"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasBorder?: boolean | null
  isStandalone?: boolean | null
  onSubmitted?(emotion: WidgetEmotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const NockerEmotion: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [grade, setGrade] = useState<WidgetGrade | null>(null)

  const onSubmit = async (grade: WidgetGrade) => {
    if (config.isLoggingIn) return
    setGrade(grade)
    if (client !== null) {
      const emotion = await client.emotions().create({
        pagePath: props.pagePath || window.location.pathname,
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
    if (client === null) {
      const emotion: WidgetEmotionSubmit = {
        type: "FIVE",
        grade,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
      }
      props.onSubmit?.(emotion)
    }
  }

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
        {widgetConfig.hasEmotionQuestionMessage && (
          <Box sx={{ pt: 2, px: 2 }}>
            <Typography
              fontSize={14}
              color={"text.secondary"}
              sx={{ lineHeight: "22px" }}
            >
              {widgetConfig.emotionQuestionMessage}
            </Typography>
          </Box>
        )}
        <Box sx={{ pt: 0.5, pb: 0.75, px: 0.75 }}>
          <NockerFormEmotion
            config={{
              gradeFiveMessage: widgetConfig.emotionFiveGradeFiveMessage,
              gradeFourMessage: widgetConfig.emotionFiveGradeFourMessage,
              gradeThreeMessage: widgetConfig.emotionFiveGradeThreeMessage,
              gradeTwoMessage: widgetConfig.emotionFiveGradeTwoMessage,
              gradeOneMessage: widgetConfig.emotionFiveGradeOneMessage,
            }}
            grade={grade}
            onSelect={(grade) => {
              onSubmit(grade)
            }}
          />
        </Box>
      </Stack>
    </Card>
  )
}
