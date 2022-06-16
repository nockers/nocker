import { Ticket, WidgetConfig } from "@nocker/client"
import {
  ConfigContext,
  useMutationTicket,
  useWidgetConfig,
  WidgetTicketSubmit,
} from "@nocker/react"
import React, { FC, useContext } from "react"
import { ButtonFilled } from "./components/button/ButtonFilled"
import { DivThanks } from "./components/div/DivThanks"
import { TextareaTicket } from "./components/textarea/TextareaTicket"
import { TransitionOpacity } from "./components/transition/TransitionOpacity"

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
        "relative w-full max-w-sm overflow-hidden rounded-md border border-solid border-slate-500 bg-white dark:bg-gray-800"
      }
    >
      <div className={"p-4"}>
        <div className={"grid w-full gap-y-4"}>
          <TextareaTicket
            value={mutation.formText}
            placeholder={widgetConfig.ticketInputPlaceholder}
            isLoading={mutation.isLoading}
            isDisabled={config.isLoggingIn}
            onChange={(event) => {
              mutation.changeFormText(event.target.value)
            }}
          />
          <ButtonFilled
            isDisabled={config.isLoggingIn || mutation.formText.length < 2}
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
