import { Box, Card, Stack, Typography } from "@mui/material"
import { Emotion, WidgetConfig } from "@nocker/client"
import {
  useMutationEmotion,
  useWidgetConfig,
  WidgetEmotionSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { BoxFormEmotion } from "./components/box/BoxFormEmotion"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasBorder?: boolean | null
  isStandalone?: boolean | null
  onSubmitted?(emotion: Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const WidgetEmotion: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationEmotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "FIVE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: (theme) => theme.spacing(40),
        borderWidth: widgetConfig.hasBorder ? 1 : 0,
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
          <BoxFormEmotion
            config={{
              gradeFiveMessage: widgetConfig.emotionFiveGradeFiveMessage,
              gradeFourMessage: widgetConfig.emotionFiveGradeFourMessage,
              gradeThreeMessage: widgetConfig.emotionFiveGradeThreeMessage,
              gradeTwoMessage: widgetConfig.emotionFiveGradeTwoMessage,
              gradeOneMessage: widgetConfig.emotionFiveGradeOneMessage,
            }}
            grade={mutationEmotion.emotionGrade}
            onSelect={(grade) => {
              mutationEmotion.onChangeEmotionGrade(grade)
              mutationEmotion.onCreateEmotion()
            }}
          />
        </Box>
      </Stack>
    </Card>
  )
}
