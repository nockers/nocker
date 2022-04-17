import { WidgetEmotion, WidgetGrade, WidgetTicket } from "@knockr/client"
import { Collapse, Divider, Paper, Stack, Typography } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { useClient, useEmotionText } from "../hooks"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFormEmotion } from "./KnockrFormEmotion"
import { KnockrFormHelps } from "./KnockrFormHelps"
import { KnockrFormTicket } from "./KnockrFormTicket"

type Props = {
  path?: string
  hasHelps: boolean
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
}

export const KnockrCard: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const [emotionGrade, setEmotionGrade] = useState<WidgetGrade | null>(null)

  const [emotionId, setEmotionid] = useState<string | null>(null)

  const [ticketId, setTicketId] = useState<string | null>(null)

  const emotionText = useEmotionText(emotionGrade)

  const onSubmitEmotion = async (emotionGrade: WidgetGrade) => {
    if (emotionGrade === null) return
    setEmotionGrade(emotionGrade)
    const emotion = await client.emotions().create({
      path: props.path ?? window.location.pathname,
      grade: emotionGrade,
      ticketId,
    })
    if (emotion instanceof Error) {
      captureException(emotion)
      props.onError?.(emotion)
      return
    }
    setEmotionid(emotion.id)
    props.onSubmitted?.(emotion)
  }

  const onCreate = async () => {
    const ticket = await client.tickets().create({
      path: props.path ?? window.location.pathname,
      type: null,
      text: formText,
      imageText: formImageText,
      emotionId,
    })
    if (ticket instanceof Error) {
      captureException(ticket)
      props.onError?.(ticket)
      return
    }
    setTicketId(ticket.id)
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

  console.log(emotionId)

  return (
    <>
      <Paper sx={{ width: (theme) => theme.spacing(40) }}>
        <Stack sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}>
          <Stack spacing={1} sx={{ p: 2 }}>
            <Typography fontSize={14} color={"text.secondary"}>
              {"どのような気分ですか？"}
            </Typography>
            <KnockrFormEmotion
              textMessage={emotionText}
              emotionGrade={emotionGrade}
              onSelect={onSubmitEmotion}
            />
          </Stack>
          <Collapse in={emotionId !== null}>
            <Divider />
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
            <KnockrFormHelps
              inputPlaceholder={"何かお困りですか？"}
              helps={widget.helps}
            />
          )}
        </Stack>
      </Paper>
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
