import type { WidgetConfig, Ticket } from "@nocker/client"
import React, { FC } from "react"
import { ButtonFilled } from "./components/button/ButtonFilled"
import { DivThanks } from "./components/div/DivThanks"
import { TextareaTicket } from "./components/textarea/TextareaTicket"
import { TransitionOpacity } from "./components/transition/TransitionOpacity"
import { useWidgetConfig } from "./hooks"
import { useMutationTicket } from "./hooks/useMutationTicket"
import { WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetTicket: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationTicket = useMutationTicket({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
    onDone: props.onDone,
  })

  return (
    <div
      className={
        "relative w-full max-w-sm overflow-hidden rounded-md border border-solid border-slate-500 bg-white dark:bg-gray-800"
      }
    >
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
  )
}
