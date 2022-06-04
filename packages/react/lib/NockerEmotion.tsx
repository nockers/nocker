import { WidgetConfig, WidgetEmotion } from "@nocker/client"
import React, { FC } from "react"
import { DivFormEmotion } from "./components/div/DivFormEmotion"
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

export const NockerEmotion: FC<Props> = (props) => {
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
      className={
        "relative w-full max-w-sm overflow-hidden rounded-md bg-white dark:bg-gray-800"
      }
    >
      <div className={"px-4 pt-4"}>
        <div className={"font-sans text-sm text-gray-500 dark:text-gray-200"}>
          {widgetConfig.emotionQuestionMessage}
        </div>
      </div>
      <div className={"px-1.5 pb-1.5 pt-2.5"}>
        <DivFormEmotion
          config={{
            gradeFiveMessage: widgetConfig.emotionFiveGradeFiveMessage,
            gradeFourMessage: widgetConfig.emotionFiveGradeFourMessage,
            gradeThreeMessage: widgetConfig.emotionFiveGradeThreeMessage,
            gradeTwoMessage: widgetConfig.emotionFiveGradeTwoMessage,
            gradeOneMessage: widgetConfig.emotionFiveGradeOneMessage,
          }}
          grade={mutation.emotionGrade}
          onSelect={mutation.onCreateEmotion}
        />
      </div>
    </div>
  )
}