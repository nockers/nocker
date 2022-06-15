import { Box, Collapse, Fade, Paper } from "@mui/material"
import { WidgetConfig, Ticket } from "@nocker/client"
import {
  useMutationTicket,
  useWidgetConfig,
  WidgetTicketSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { BoxFormTicket } from "./components/box/BoxFormTicket"
import { BoxThanks } from "./components/box/BoxThanks"

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
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutation = useMutationTicket({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmit,
    onError: props.onError,
    onDone: props.onDone,
  })

  const isOpenHelpForm = false

  return (
    <>
      <Paper sx={{ width: (theme) => theme.spacing(40) }}>
        <Collapse in={!isOpenHelpForm}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              pl: 2,
              pr: 2,
              pt: 2,
              pb: 2,
            }}
          >
            <BoxFormTicket
              config={{
                buttonSubmitText: widgetConfig.ticketButtonSubmitText,
                inputPlaceholder: widgetConfig.ticketInputPlaceholder,
              }}
              text={mutation.formText}
              isLoading={mutation.isLoading}
              onChangeText={(text) => {
                mutation.changeFormText(text)
              }}
              onSubmit={() => {
                mutation.createTicket()
              }}
            />
            <Fade in={mutation.isDone}>
              <Box>
                <BoxThanks
                  isMinimal={true}
                  config={{
                    thanksMessage: widgetConfig.ticketThanksMessage,
                    buttonResetText: widgetConfig.ticketButtonResetText,
                  }}
                  onReset={mutation.reset}
                />
              </Box>
            </Fade>
          </Box>
        </Collapse>
      </Paper>
    </>
  )
}
