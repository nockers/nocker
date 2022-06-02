import { Box, Collapse, Fade, Paper } from "@mui/material"
import { WidgetConfig, WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { WidgetTicketSubmit } from "../types"
import { BoxFormTicket } from "./box/BoxFormTicket"
import { BoxThanks } from "./box/BoxThanks"
import { BoxCapure } from "./box/BoxCapure"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: WidgetTicket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerTicket: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const [isOpenHelpForm, openHelpForm] = useState(false)

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onCreateTicket = async () => {
    if (config.isLoggingIn) return
    setLoading(true)
    if (client !== null) {
      const ticket = await client.tickets().create({
        type: null,
        text: formText,
        imageText: formImageText,
        emotionId: null,
        pagePath: props.pagePath || window.location.pathname,
      })
      if (ticket instanceof Error) {
        captureException(ticket)
        props.onError?.(ticket)
        setLoading(false)
        return
      }
      markAsDone(true)
      props.onSubmitted?.(ticket)
    }
    if (client === null) {
      const ticket: WidgetTicketSubmit = {
        type: null,
        text: formText,
        imageText: formImageText,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
        emotionGrade: null,
        emotionType: null,
      }
      await new Promise((resolve) => setTimeout(resolve, 500))
      markAsDone(true)
      props.onSubmit?.(ticket)
    }
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
    props.onDone?.()
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
            <BoxFormTicket
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
        <BoxCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
