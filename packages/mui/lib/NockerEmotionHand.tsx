import { Box, Card, Stack, Typography } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetGrade } from "@nocker/client"
import { captureException } from "@sentry/hub"
import React, { FC, useContext, useState } from "react"
import { BoxFormEmotionTwo } from "./components/box/BoxFormEmotionTwo"
import { ConfigContext } from "./contexts"
import { useClient, useWidgetConfig } from "./hooks"
import { WidgetEmotionSubmit } from "./types"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasBorder?: boolean | null
  onSubmitted?(emotion: WidgetEmotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const NockerEmotionHand: FC<Props> = (props) => {
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
        type: "TWO",
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
    if (client === null) {
      const emotion: WidgetEmotionSubmit = {
        type: "TWO",
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
        {widgetConfig.emotionType !== null && (
          <Box sx={{ pt: 2, pb: 0, pr: 1, pl: 2 }}>
            <Typography
              fontSize={14}
              color={"text.secondary"}
              sx={{ lineHeight: "22px" }}
            >
              {widgetConfig.emotionQuestionMessage}
            </Typography>
          </Box>
        )}
        <Box sx={{ pt: 1, pb: 1.25, px: 1.25 }}>
          <BoxFormEmotionTwo
            config={{
              gradeOneMessage: widgetConfig.emotionTwoGradeOneMessage,
              gradeTwoMessage: widgetConfig.emotionTwoGradeTwoMessage,
              thanksMessage: widgetConfig.emotionThanksMessage,
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
