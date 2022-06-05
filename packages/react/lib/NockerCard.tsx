import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@nocker/client"
import React, { FC } from "react"
import { ButtonClose } from "./components/button/ButtonClose"
import { DivFormEmotion } from "./components/div/DivFormEmotion"
import { DivFormTicket } from "./components/div/DivFormTicket"
import { DivThanks } from "./components/div/DivThanks"
import { TransitionOpacity } from "./components/transition/TransitionOpacity"
import { useMutationEmotion, useWidgetConfig } from "./hooks"
import { useMutationTicket } from "./hooks/useMutationTicket"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasHelps?: boolean
  hasBorder?: boolean | null
  isNotEmbedded?: boolean
  onClose?(): void
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerCard: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationTicket = useMutationTicket({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmitTicket,
    onError: props.onError,
    onDone: props.onDone,
  })

  const hasHeader = typeof props.onClose !== "undefined"

  const mutationEmotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmitEmotion,
    onError: props.onError,
  })

  return (
    <div
      className={
        "relative w-full max-w-sm overflow-hidden rounded-md border border-solid border-slate-500 bg-white dark:bg-gray-800"
      }
    >
      <div>
        <div className={"grid grid-flow-col justify-between"}>
          <div className={"pt-4 pl-4"}>
            <div
              className={"font-sans text-sm text-gray-500 dark:text-gray-200"}
            >
              {widgetConfig.emotionQuestionMessage}
            </div>
          </div>
          <div className={"pr-3 pt-3"}>
            <ButtonClose onClick={props.onClose} />
          </div>
        </div>
        <div className={"px-1.5 pb-1.5"}>
          <DivFormEmotion
            config={{
              gradeFiveMessage: widgetConfig.emotionFiveGradeFiveMessage,
              gradeFourMessage: widgetConfig.emotionFiveGradeFourMessage,
              gradeThreeMessage: widgetConfig.emotionFiveGradeThreeMessage,
              gradeTwoMessage: widgetConfig.emotionFiveGradeTwoMessage,
              gradeOneMessage: widgetConfig.emotionFiveGradeOneMessage,
            }}
            grade={mutationEmotion.emotionGrade}
            onSelect={mutationEmotion.onCreateEmotion}
          />
        </div>
      </div>
      <div className={"h-px w-full bg-slate-200"} />
      <div className={"p-4"}>
        <DivFormTicket
          config={{
            buttonSubmitText: widgetConfig.ticketButtonSubmitText,
            inputPlaceholder: widgetConfig.ticketInputPlaceholder,
          }}
          text={mutationTicket.formText}
          isLoading={mutationTicket.isLoading}
          onChangeText={mutationTicket.onChangeFormText}
          onSubmit={mutationTicket.onCreateTicket}
        />
      </div>
      <TransitionOpacity in={mutationTicket.isDone}>
        <DivThanks
          message={widgetConfig.ticketThanksMessage}
          buttonText={widgetConfig.ticketButtonResetText}
          onClick={mutationTicket.onResetForm}
        />
      </TransitionOpacity>
    </div>
  )
}
