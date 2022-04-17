import { WidgetEmotion, WidgetGrade, WidgetTicket } from "@knockr/client"
import { Box, Card, Divider, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { useClient, useEmotionText } from "../hooks"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFloatingCardHeader } from "./KnockrFloatingCardHeader"
import { KnockrFormEmotion } from "./KnockrFormEmotion"
import { KnockrFormHelps } from "./KnockrFormHelps"
import { KnockrFormTicket } from "./KnockrFormTicket"

type Props = {
  path?: string
  hasHelps: boolean
  hasEmotion: boolean
  onClose(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
}

export const KnockrFloatingCard: VFC<Props> = (props) => {
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
    setFormText("")
    setFormImageText(null)
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
      {!isOpenCapture && (
        <Card sx={{ width: (theme) => theme.spacing(40) }}>
          <KnockrFloatingCardHeader
            title={props.hasEmotion ? "どのような気分ですか？" : null}
            onClose={props.onClose}
          />
          {props.hasEmotion === true && (
            <Stack spacing={1} sx={{ px: 2, pb: 2 }}>
              <KnockrFormEmotion
                textMessage={emotionText}
                emotionGrade={emotionGrade}
                onSelect={onSubmitEmotion}
              />
            </Stack>
          )}
          <Stack
            sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}
          >
            <Box sx={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
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
            </Box>
            {hasHelps && <Divider />}
            {hasHelps && (
              <KnockrFormHelps
                inputPlaceholder={"何かお困りですか？"}
                helps={widget.helps}
              />
            )}
          </Stack>
        </Card>
      )}
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
