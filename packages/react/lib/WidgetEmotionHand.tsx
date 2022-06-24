import type { WidgetConfig, Emotion } from "@nocker/client"
import React, { FC, useContext } from "react"
import { DivEmotionHand } from "./components/div/DivEmotionHand"
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

export const WidgetEmotionHand: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutation = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "TWO",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
  })

  return (
    <div
      className={"relative w-full max-w-sm overflow-hidden rounded-md bg-white"}
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
      <div className={"px-2.5 pb-2.5"}>
        <DivEmotionHand
          config={{
            gradeOneMessage: widgetConfig.emotionTwoGradeOneMessage,
            gradeTwoMessage: widgetConfig.emotionTwoGradeTwoMessage,
            thanksMessage: widgetConfig.emotionThanksMessage,
          }}
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
