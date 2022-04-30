import { WidgetTicket } from "@knockr/client"
import { Box, Collapse, Fade, Paper } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { useClient } from "../hooks"
import { BoxThanks } from "./box/BoxThanks"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFormTicket } from "./KnockrFormTicket"

type Props = {
  pagePath?: string | null
  inputPlaceholder?: string | null
  buttonText?: string | null
  textThanks?: string | null
  onSubmitted?(ticket: WidgetTicket): void
  onError?(error: Error): void
}

export const KnockrTicket: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

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
      pagePath: props.pagePath ?? window.location.pathname,
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
            <KnockrFormTicket
              inputPlaceholder={
                props.inputPlaceholder ??
                "製品の改善についてご意見・ご要望をお聞かせください。"
              }
              buttonText={props.buttonText ?? "送信する"}
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
                  text={
                    props.textThanks ??
                    "ありがとうございます。フィードバックを送信しました。"
                  }
                  onReset={onReset}
                />
              </Box>
            </Fade>
          </Box>
        </Collapse>
      </Paper>
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
