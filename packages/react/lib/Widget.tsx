import type { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import clsx from "clsx"
import React, { FC, Fragment } from "react"
import { BiSearch } from "react-icons/bi"
import { ButtonClose } from "./components/button/ButtonClose"
import { ButtonFilled } from "./components/button/ButtonFilled"
import { DivEmotion } from "./components/div/DivEmotion"
import { DivThanks } from "./components/div/DivThanks"
import { TextareaTicket } from "./components/textarea/TextareaTicket"
import { TransitionOpacity } from "./components/transition/TransitionOpacity"
import { useMutationEmotion, useWidgetConfig } from "./hooks"
import { useMutationTicket } from "./hooks/useMutationTicket"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onClose?(): void
  onSubmitted?(data: Ticket | Emotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const Widget: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationEmotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "FIVE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmitEmotion,
    onError: props.onError,
    ticketId() {
      return mutationTicket.ticketId
    },
  })

  const mutationTicket = useMutationTicket({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmitTicket,
    onError: props.onError,
    onDone: props.onDone,
    emotionId() {
      return mutationEmotion.emotionId
    },
  })

  const hasHeader = typeof props.onClose !== "undefined"

  const helps = [] as const

  const hasHelps = false

  return (
    <div
      className={clsx(
        "relative w-full max-w-sm overflow-hidden rounded-md bg-white dark:bg-gray-800",
        widgetConfig?.hasBorder && "border border-solid border-slate-500",
      )}
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
          {hasHeader && (
            <div className={"pr-3 pt-3"}>
              <ButtonClose onClick={props.onClose} />
            </div>
          )}
        </div>
        <div className={"px-1.5 pb-1.5"}>
          <DivEmotion
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
        </div>
        <div className={"h-px w-full bg-slate-200"} />
        <div className={"p-4"}>
          <div className={"grid w-full gap-y-4"}>
            <TextareaTicket
              value={mutationTicket.formText}
              placeholder={widgetConfig.ticketInputPlaceholder}
              isLoading={mutationTicket.isLoading}
              onChange={(event) => {
                mutationTicket.onChangeFormText(event.target.value)
              }}
            />
            <ButtonFilled
              isDisabled={mutationTicket.formText.length < 2}
              isLoading={mutationTicket.isLoading}
              onClick={mutationTicket.onCreateTicket}
            >
              {widgetConfig.ticketButtonSubmitText}
            </ButtonFilled>
          </div>
        </div>
        <TransitionOpacity in={mutationTicket.isDone}>
          <DivThanks
            message={widgetConfig.ticketThanksMessage}
            buttonText={widgetConfig.ticketButtonResetText}
            onClick={mutationTicket.onReset}
          />
        </TransitionOpacity>
      </div>
      {hasHelps && <div className={"h-px w-full bg-slate-200"} />}
      {hasHelps && (
        <div className={"max-h-32 overflow-y-auto"}>
          <div className={"flex px-4 py-3"}>
            <BiSearch className={"h-5 w-5 fill-slate-500"} />
            <input
              className={
                "ml-2 flex-1 border-0 p-0 font-sans focus:outline-none"
              }
              placeholder={"何かお困りですか？"}
            />
          </div>
          {helps.map((help, i) => (
            <Fragment key={i}>
              <div className={"h-px w-full bg-slate-100"} />
              <div className={"px-4 py-2"}>
                <div className={"font-sans text-sm text-slate-700"}>{""}</div>
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
