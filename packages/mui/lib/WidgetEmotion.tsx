import { Box, Card, Stack, Typography } from "@mui/material"
import { Emotion, WidgetConfig } from "@nocker/client"
import {
  useMutationEmotion,
  useWidgetConfig,
  WidgetEmotionSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { BoxEmotion } from "./components/box/BoxEmotion"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(emotion: Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const WidgetEmotion: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const emotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "FIVE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <Card
      variant={"outlined"}
      sx={{
        overflow: "hidden",
        width: "100%",
        maxWidth: (theme) => theme.spacing(40),
        borderWidth: widgetConfig.hasBorder ? 1 : 0,
      }}
    >
      <Stack sx={{ width: "100%" }}>
        {widgetConfig.hasEmotionQuestionMessage && (
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
        <Box sx={{ pb: 0.75, px: 0.75 }}>
          <BoxEmotion
            gradeFiveMessage={widgetConfig.emotionFiveGradeFiveMessage}
            gradeFourMessage={widgetConfig.emotionFiveGradeFourMessage}
            gradeThreeMessage={widgetConfig.emotionFiveGradeThreeMessage}
            gradeTwoMessage={widgetConfig.emotionFiveGradeTwoMessage}
            gradeOneMessage={widgetConfig.emotionFiveGradeOneMessage}
            grade={emotion.emotionGrade}
            onSelect={(grade) => {
              emotion.createEmotion(grade)
            }}
          />
        </Box>
      </Stack>
    </Card>
  )
}
