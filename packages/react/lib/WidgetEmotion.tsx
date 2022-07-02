import type { WidgetConfig, Emotion } from "@nocker/client"
import React, { FC, useContext } from "react"
import { DivEmotion } from "./components/div/DivEmotion"
import { ConfigContext } from "./contexts"
import { useMutationEmotion, useWidgetConfig } from "./hooks"
import { WidgetEmotionSubmit } from "./types"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Emotion): void
  onSubmit?(ticket: WidgetEmotionSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetEmotion: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutation = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "FIVE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <div
      className={
        "relative w-full max-w-sm overflow-hidden rounded-md bg-white dark:bg-neutral-800"
      }
    >
      <div
        className={
          "grid grid-flow-col items-center justify-between pt-2 pl-4 pr-2"
        }
      >
        <div
          className={
            "font-sans text-sm font-bold text-neutral-500 dark:text-neutral-200"
          }
        >
          {widgetConfig.emotionQuestionMessage}
        </div>
        <div style={{ width: 34, height: 34 }} />
      </div>
      <div className={"px-1.5 pb-1.5"}>
        <DivEmotion
          gradeFiveMessage={widgetConfig.emotionFiveGradeFiveMessage}
          gradeFourMessage={widgetConfig.emotionFiveGradeFourMessage}
          gradeThreeMessage={widgetConfig.emotionFiveGradeThreeMessage}
          gradeTwoMessage={widgetConfig.emotionFiveGradeTwoMessage}
          gradeOneMessage={widgetConfig.emotionFiveGradeOneMessage}
          grade={mutation.emotionGrade}
          isDisabled={config.isLoggingIn}
          onSelect={(grade) => {
            mutation.createEmotion(grade)
          }}
        />
      </div>
    </div>
  )
}
