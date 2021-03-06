import { HStack, Stack } from "@chakra-ui/react"
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
    <Stack
      color={"black"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      padding={"14px"}
    >
      <HStack>
        <Stack>
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
        </Stack>
      </HStack>
      <TransitionOpacity in={mutation.isDone}>
        <DivThanks
          message={widgetConfig.ticketThanksMessage}
          buttonText={widgetConfig.ticketButtonResetText}
          onClick={() => {
            mutation.reset()
          }}
        />
      </TransitionOpacity>
    </Stack>
  )
}
