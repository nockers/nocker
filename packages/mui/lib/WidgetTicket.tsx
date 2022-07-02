import { LoadingButton } from "@mui/lab"
import { Box, Collapse, Fade, Paper, Stack } from "@mui/material"
import { WidgetConfig, Ticket } from "@nocker/client"
import {
  useMutationTicket,
  useWidgetConfig,
  WidgetTicketSubmit,
} from "@nocker/react"
import React, { FC } from "react"
import { BoxThanks } from "./components/box/BoxThanks"
import { InputTicket } from "./components/box/BoxTicket"

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
      <Paper
        variant={"outlined"}
        sx={{
          overflow: "hidden",
          width: "100%",
          maxWidth: (theme) => theme.spacing(40),
          borderWidth: widgetConfig.hasBorder ? 1 : 0,
        }}
      >
        <Collapse in={!isOpenHelpForm}>
          <Box
            sx={{
              position: "relative",
              pl: 2,
              pr: 2,
              pt: 2,
              pb: 2,
            }}
          >
            <Stack sx={{ width: "100%" }} spacing={1}>
              <Stack sx={{ pl: 0, flex: 1 }}>
                <InputTicket
                  placeholder={widgetConfig.ticketInputPlaceholder}
                  value={mutation.text}
                  isLoading={mutation.isLoading}
                  onChangeText={(text) => {
                    mutation.updateText(text)
                  }}
                />
              </Stack>
              <Stack direction={"row"} spacing={1} sx={{ pl: 0 }}>
                <LoadingButton
                  size={"small"}
                  variant={"contained"}
                  sx={{ flex: 1 }}
                  onClick={() => {
                    mutation.createTicket()
                  }}
                  disabled={mutation.text.length < 4}
                  loading={mutation.isLoading}
                >
                  {widgetConfig.ticketButtonSubmitText}
                </LoadingButton>
              </Stack>
            </Stack>
            <Fade in={mutation.isDone}>
              <Box>
                <BoxThanks
                  isMinimal={true}
                  message={widgetConfig.ticketThanksMessage}
                  buttonText={widgetConfig.ticketButtonResetText}
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
