import type { WidgetConfig, Ticket } from "@nocker/client"
import React, { FC, useContext } from "react"
import { ButtonFilled } from "./components/button/ButtonFilled"
import { DivThanks } from "./components/div/DivThanks"
import { TextareaTicket } from "./components/textarea/TextareaTicket"
import { TransitionOpacity } from "./components/transition/TransitionOpacity"
import { ConfigContext } from "./contexts"
import { useWidgetConfig } from "./hooks"
import { useMutationTicket } from "./hooks/useMutationTicket"
import { WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetTicket: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutation = useMutationTicket({
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
        "relative w-full max-w-sm overflow-hidden rounded-md border border-solid border-neutral-500 bg-white dark:bg-neutral-800"
      }
    >
      <div className={"p-4"}>
        <div className={"grid w-full gap-y-4"}>
          <TextareaTicket
            value={mutation.text}
            placeholder={widgetConfig.ticketInputPlaceholder}
            isLoading={mutation.isLoading}
            isDisabled={config.isLoggingIn}
            onChange={(event) => {
              mutation.updateText(event.target.value)
            }}
          />
          <ButtonFilled
            isDisabled={mutation.text.length < 2}
            isLoading={mutation.isLoading}
            onClick={() => {
              mutation.createTicket()
            }}
          >
            {widgetConfig.ticketButtonSubmitText}
          </ButtonFilled>
        </div>
      </div>
      <TransitionOpacity in={mutation.isDone}>
        <DivThanks
          message={widgetConfig.ticketThanksMessage}
          buttonText={widgetConfig.ticketButtonResetText}
          onClick={() => {
            mutation.reset()
          }}
        />
      </TransitionOpacity>
    </div>
  )
}
