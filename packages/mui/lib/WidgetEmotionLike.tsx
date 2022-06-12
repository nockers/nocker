import { Box, Card } from "@mui/material"
import { Emotion, WidgetConfig } from "@nocker/client"
import {
  useMutationEmotion,
  useWidgetConfig,
  WidgetEmotionSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { BoxFormEmotionOne } from "./components/box/BoxFormEmotionOne"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  hasBorder?: boolean | null
  onSubmitted?(emotion: Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const WidgetEmotionLike: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationEmotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "ONE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <Card
      sx={{
        display: "flex",
        width: "fit-content",
        borderWidth: widgetConfig.hasBorder ? 1 : 0,
      }}
    >
      <Box sx={{ py: 0, px: 0 }}>
        <BoxFormEmotionOne
          config={{
            buttonText: widgetConfig.emotionOneButtonText,
          }}
          isActive={mutationEmotion.emotionGrade !== null}
          onClick={() => {
            mutationEmotion.onChangeEmotionGrade(1)
            mutationEmotion.onCreateEmotion()
          }}
        />
      </Box>
    </Card>
  )
}
