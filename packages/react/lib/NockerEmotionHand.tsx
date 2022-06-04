import { WidgetConfig, WidgetEmotion } from "@nocker/client"
import React, { FC } from "react"
import { DivFormEmotionHand } from "./components/div/DivFormEmotionHand"
import { useMutationEmotion, useWidgetConfig } from "./hooks"
import { WidgetEmotionSubmit } from "./types"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: WidgetEmotion): void
  onSubmit?(ticket: WidgetEmotionSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerEmotionHand: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutation = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <div
      className={"relative w-full max-w-sm overflow-hidden rounded-md bg-white"}
    >
      <div className={"px-4 pt-4"}>
        <div className={"font-sans text-sm text-gray-500"}>
          {widgetConfig.emotionQuestionMessage}
        </div>
      </div>
      <div className={"px-2.5 pb-2.5 pt-3.5"}>
        <DivFormEmotionHand
          config={{
            gradeOneMessage: widgetConfig.emotionTwoGradeOneMessage,
            gradeTwoMessage: widgetConfig.emotionTwoGradeTwoMessage,
            thanksMessage: widgetConfig.emotionThanksMessage,
          }}
          grade={mutation.emotionGrade}
          onSelect={mutation.onCreateEmotion}
        />
      </div>
    </div>
  )
}
