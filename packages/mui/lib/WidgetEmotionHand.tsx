import { Box, Card, Stack, Typography } from "@mui/material"
import { WidgetConfig, Emotion } from "@nocker/client"
import {
  useMutationEmotion,
  useWidgetConfig,
  WidgetEmotionSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { BoxFormEmotionTwo } from "./components/box/BoxFormEmotionTwo"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(emotion: Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const WidgetEmotionHand: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationEmotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "TWO",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <Card
      variant={"outlined"}
      sx={{
        width: "100%",
        maxWidth: (theme) => theme.spacing(40),
        borderWidth: widgetConfig.hasBorder ? 1 : 0,
      }}
    >
      <Stack sx={{ width: "100%" }}>
        {widgetConfig.emotionType !== null && (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={1}
            sx={{ pt: 1, pl: 2, pr: 1 }}
          >
            <Typography
              fontSize={14}
              color={"text.secondary"}
              sx={{ fontWeight: "bold" }}
            >
              {widgetConfig.emotionQuestionMessage}
            </Typography>
            <Box sx={{ height: 34, width: 34 }} />
          </Stack>
        )}
        <Box sx={{ pt: 0.5, pb: 1.25, px: 1.25 }}>
          <BoxFormEmotionTwo
            config={{
              gradeOneMessage: widgetConfig.emotionTwoGradeOneMessage,
              gradeTwoMessage: widgetConfig.emotionTwoGradeTwoMessage,
              thanksMessage: widgetConfig.emotionThanksMessage,
            }}
            grade={mutationEmotion.emotionGrade}
            onSelect={(grade) => {
              mutationEmotion.createEmotion(grade)
            }}
          />
        </Box>
      </Stack>
    </Card>
  )
}
