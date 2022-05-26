import { Box, Collapse, Fade, Paper } from "@mui/material"
import { WidgetConfig, WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useContext, useState } from "react"
import { WidgetContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { BoxThanks } from "./box/BoxThanks"
import { NockerCapure } from "./NockerCapure"
import { NockerFormTicket } from "./NockerFormTicket"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(ticket: WidgetTicket): void
  onError?(error: Error): void
}

export const NockerTicket: FC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const [isOpenHelpForm, openHelpForm] = useState(false)

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onCreateTicket = async () => {
    setLoading(true)
    const ticket = await client.tickets().create({
      pagePath: props.pagePath || window.location.pathname,
      type: null,
      text: formText,
      imageText: formImageText,
      emotionId: null,
    })
    if (ticket instanceof Error) {
      captureException(ticket)
      props.onError?.(ticket)
      setLoading(false)
      return
    }
    markAsDone(true)
    props.onSubmitted?.(ticket)
    setLoading(false)
  }

  const onChangeText = (text: string) => {
    setFormText(text)
  }

  const onOpenCapture = async () => {
    openCapture(true)
  }

  const onCapture = (imageText: string) => {
    setFormImageText(imageText)
    openCapture(false)
  }

  const onCancelCapture = () => {
    openCapture(false)
  }

  const onReset = () => {
    setFormText("")
    setFormImageText(null)
    markAsDone(false)
  }

  if (widget.isLoading) {
    return null
  }

  return (
    <>
      <Paper sx={{ width: (theme) => theme.spacing(40) }}>
        <Collapse in={!isOpenHelpForm}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              pl: 1,
              pr: 2,
              pt: 2,
              pb: 2,
            }}
          >
            <NockerFormTicket
              config={{
                buttonSubmitText: widgetConfig.ticketButtonSubmitText,
                inputPlaceholder: widgetConfig.ticketInputPlaceholder,
              }}
              text={formText}
              hasImage={formImageText !== null}
              isLoading={isLoading}
              onChangeText={onChangeText}
              onOpenCapture={onOpenCapture}
              onSubmit={onCreateTicket}
            />
            <Fade in={isDone}>
              <Box>
                <BoxThanks
                  config={{
                    thanksMessage: widgetConfig.ticketThanksMessage,
                    buttonResetText: widgetConfig.ticketButtonResetText,
                  }}
                  onReset={onReset}
                />
              </Box>
            </Fade>
          </Box>
        </Collapse>
      </Paper>
      {isOpenCapture && (
        <NockerCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
