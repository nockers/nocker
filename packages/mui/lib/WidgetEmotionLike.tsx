import { Card } from "@mui/material"
import { Emotion, WidgetConfig } from "@nocker/client"
import {
  useMutationEmotion,
  useWidgetConfig,
  WidgetEmotionSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { ButtonEmotionOne } from "./components/button/ButtonEmotionOne"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(emotion: Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const WidgetEmotionLike: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutation = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "ONE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <Card
      variant={"outlined"}
      sx={{
        width: "fit-content",
        borderWidth: widgetConfig.hasBorder ? 1 : 0,
      }}
    >
      <ButtonEmotionOne
        config={{
          buttonText: widgetConfig.emotionOneButtonText,
        }}
        isActive={mutation.emotionGrade !== null}
        onClick={() => {
          mutation.createEmotion(1)
        }}
      />
    </Card>
  )
}
