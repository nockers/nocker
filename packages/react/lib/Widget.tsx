import type { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import clsx from "clsx"
import React, { FC, Fragment, useContext } from "react"
import { BiSearch } from "react-icons/bi"
import { ButtonClose } from "./components/button/ButtonClose"
import { ButtonFilled } from "./components/button/ButtonFilled"
import { DivEmotion } from "./components/div/DivEmotion"
import { DivThanks } from "./components/div/DivThanks"
import { TextareaTicket } from "./components/textarea/TextareaTicket"
import { TransitionOpacity } from "./components/transition/TransitionOpacity"
import { ConfigContext } from "./contexts"
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
  const config = useContext(ConfigContext)

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

  const hasCloseButton = typeof props.onClose !== "undefined"

  const helps = [] as const

  const hasHelps = false

  return (
    <div
      className={clsx(
        "relative w-full max-w-sm overflow-hidden rounded-md bg-white dark:bg-neutral-800",
        widgetConfig?.hasBorder && "border border-solid border-neutral-500",
      )}
    >
      <div>
        {widgetConfig.emotionType !== null && (
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
            {hasCloseButton ? (
              <ButtonClose onClick={props.onClose} />
            ) : (
              <div style={{ width: 34, height: 34 }} />
            )}
          </div>
        )}
        <div className={"px-1.5 pb-1.5"}>
          <DivEmotion
            gradeFiveMessage={widgetConfig.emotionFiveGradeFiveMessage}
            gradeFourMessage={widgetConfig.emotionFiveGradeFourMessage}
            gradeThreeMessage={widgetConfig.emotionFiveGradeThreeMessage}
            gradeTwoMessage={widgetConfig.emotionFiveGradeTwoMessage}
            gradeOneMessage={widgetConfig.emotionFiveGradeOneMessage}
            grade={mutationEmotion.emotionGrade}
            isDisabled={config.isLoggingIn}
            onSelect={(grade) => {
              mutationEmotion.createEmotion(grade)
            }}
          />
        </div>
        <div className={"h-px w-full bg-neutral-200"} />
        <div className={"p-4"}>
          <div className={"grid w-full gap-y-4"}>
            <TextareaTicket
              value={mutationTicket.text}
              placeholder={widgetConfig.ticketInputPlaceholder}
              isLoading={mutationTicket.isLoading}
              isDisabled={config.isLoggingIn}
              onChange={(event) => {
                mutationTicket.updateText(event.target.value)
              }}
            />
            <ButtonFilled
              isDisabled={mutationTicket.text.length < 2}
              isLoading={mutationTicket.isLoading}
              onClick={() => {
                mutationTicket.createTicket()
              }}
            >
              {widgetConfig.ticketButtonSubmitText}
            </ButtonFilled>
          </div>
        </div>
        <TransitionOpacity in={mutationTicket.isDone} withDelay>
          <DivThanks
            message={widgetConfig.ticketThanksMessage}
            buttonText={widgetConfig.ticketButtonResetText}
            onClick={() => {
              mutationEmotion.reset()
              mutationTicket.reset()
            }}
          />
        </TransitionOpacity>
      </div>
      {hasHelps && <div className={"h-px w-full bg-neutral-200"} />}
      {hasHelps && (
        <div className={"max-h-32 overflow-y-auto"}>
          <div className={"flex px-4 py-3"}>
            <BiSearch className={"h-5 w-5 fill-neutral-500"} />
            <input
              className={
                "ml-2 flex-1 border-0 p-0 font-sans focus:outline-none"
              }
              placeholder={"何かお困りですか？"}
            />
          </div>
          {helps.map((help, i) => (
            <Fragment key={i}>
              <div className={"h-px w-full bg-neutral-100"} />
              <div className={"px-4 py-2"}>
                <div className={"font-sans text-sm text-neutral-600"}>{""}</div>
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
