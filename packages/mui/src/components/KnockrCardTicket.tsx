import { WidgetTicket } from "@knockr/client"
import { Collapse, Divider, Paper, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { useClient } from "../hooks"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFormHelps } from "./KnockrFormHelps"
import { KnockrFormTicket } from "./KnockrFormTicket"

type Props = {
  path?: string
  hasHelps: boolean
  onSubmitted?(ticket: WidgetTicket): void
  onError?(error: Error): void
}

export const KnockrCardTicket: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const [isOpenHelpForm, openHelpForm] = useState(false)

  const onCreate = async () => {
    const ticket = await client.tickets().create({
      path: props.path ?? window.location.pathname,
      type: null,
      text: formText,
      imageText: formImageText,
      emotionId: null,
    })
    if (ticket instanceof Error) {
      captureException(ticket)
      props.onError?.(ticket)
      return
    }
    setFormText("")
    setFormImageText(null)
    props.onSubmitted?.(ticket)
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

  const hasHelps = props.hasHelps && 0 < widget.helps.length

  return (
    <>
      <Paper sx={{ width: (theme) => theme.spacing(40) }}>
        <Stack sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}>
          <Collapse in={!isOpenHelpForm}>
            <KnockrFormTicket
              inputPlaceholder={
                "製品の改善についてご意見・ご要望をお聞かせください。"
              }
              buttonText={"送信する"}
              text={formText}
              onChangeText={onChangeText}
              onOpenCapture={onOpenCapture}
              onSubmit={onCreate}
            />
          </Collapse>
          {hasHelps && (
            <Stack>
              {!isOpenHelpForm && <Divider />}
              <KnockrFormHelps
                inputPlaceholder={"何かお困りですか？"}
                helps={widget.helps}
                onOpen={() => {
                  openHelpForm(true)
                }}
              />
            </Stack>
          )}
        </Stack>
      </Paper>
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
