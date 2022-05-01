import { WidgetEmotion, WidgetGrade, WidgetTicket } from "@knockr/client"
import {
  Box,
  Card,
  Collapse,
  Divider,
  Fade,
  Stack,
  Typography,
} from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { useClient, useEmotionText } from "../hooks"
import { BoxThanks } from "./box/BoxThanks"
import { ButtonClose } from "./button/ButtonClose"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFormEmotion } from "./KnockrFormEmotion"
import { KnockrFormEmotionTwo } from "./KnockrFormEmotionTwo"
import { KnockrFormHelps } from "./KnockrFormHelps"
import { KnockrFormTicket } from "./KnockrFormTicket"

type Props = {
  pagePath?: string
  pageTitle?: string
  hasHelps?: boolean
  emotionType?: "FIVE" | "TWO" | null
  emotionMessage?: string | null
  emotionThanksMessage?: string | undefined
  hideTicket?: boolean | null
  isNotEmbedded?: boolean
  hasBorder?: boolean | null
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
  onDone?(): void
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

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onCreateEmotion = async (emotionGrade: WidgetGrade) => {
    if (emotionGrade === null) return
    setEmotionGrade(emotionGrade)
    const emotion = await client.emotions().create({
      pagePath: props.pagePath ?? window.location.pathname,
      grade: emotionGrade,
      ticketId,
      type: "FIVE",
      slug: "test",
    })
    if (emotion instanceof Error) {
      captureException(emotion)
      props.onError?.(emotion)
      return
    }
    setEmotionid(emotion.id)
    props.onSubmitted?.(emotion)
  }

  const onCreateTicket = async () => {
    const ticket = await client.tickets().create({
      pagePath: props.pagePath ?? window.location.pathname,
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
    markAsDone(true)
    props.onSubmitted?.(ticket)
    setLoading(false)
    setTimeout(() => {
      setEmotionGrade(null)
    }, 1000)
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
    if (typeof props.onDone === "undefined") {
      setEmotionGrade(null)
      setFormText("")
      setFormImageText(null)
      setEmotionid(null)
      setTicketId(null)
      markAsDone(false)
    }
    props.onDone?.()
  }

  const hasHelps = props.hasHelps === true && 0 < widget.helps.length

  const emotionType = props.emotionType ?? null

  const hasEmotion = typeof emotionType === "string"

  const isMinimal = props.hideTicket === true

  const isOpenTicket = !isMinimal || !hasEmotion || emotionId !== null

  const isShowCard = props.isNotEmbedded !== true || !isOpenCapture

  const emotionMessage =
    props.emotionMessage ?? "このページは役に立ちましたか？"

  const emotionThanksMessage =
    props.emotionThanksMessage ?? "回答ありがとうございます"

  const hasBorder = props.hasBorder ?? true

  return (
    <>
      {isShowCard && (
        <Card
          sx={{
            display: "flex",
            width: props.isNotEmbedded ? (theme) => theme.spacing(40) : "100%",
            maxWidth: (theme) => theme.spacing(40),
            borderWidth: hasBorder ? 1 : 0,
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: hasHelps ? "24rem" : "auto",
              overflowY: "auto",
            }}
          >
            <Box sx={{ position: "relative", overflowY: "hidden" }}>
              {emotionType !== null && (
                <Box sx={{ pt: 1, pl: 2, pr: 1 }}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={1}
                  >
                    <Typography fontSize={14} color={"text.secondary"}>
                      {emotionMessage}
                    </Typography>
                    <ButtonClose onClose={props.onClose} />
                  </Stack>
                </Box>
              )}
              {emotionType === "FIVE" && (
                <Box sx={{ pb: 0.75, px: 0.75 }}>
                  <KnockrFormEmotion
                    textMessage={emotionText}
                    grade={emotionGrade}
                    onSelect={onCreateEmotion}
                  />
                </Box>
              )}
              {emotionType === "TWO" && (
                <Box sx={{ pt: 0.5, pb: 1.25, px: 1.25 }}>
                  <KnockrFormEmotionTwo
                    grade={emotionGrade}
                    textMessage={emotionThanksMessage}
                    onSelect={onCreateEmotion}
                  />
                </Box>
              )}
              {!hasEmotion && (
                <Stack
                  direction={"row"}
                  justifyContent={"flex-end"}
                  sx={{ pt: 1, px: 1 }}
                >
                  <ButtonClose onClose={props.onClose} />
                </Stack>
              )}
              <Collapse in={isOpenTicket}>
                {hasEmotion && <Divider />}
                <Box sx={{ pl: 1, pr: 2, pt: hasEmotion ? 2 : 0.5, pb: 2 }}>
                  <KnockrFormTicket
                    inputPlaceholder={
                      "製品の改善についてご意見・ご要望をお聞かせください。"
                    }
                    buttonText={"送信する"}
                    text={formText}
                    hasImage={formImageText !== null}
                    isLoading={isLoading}
                    onChangeText={onChangeText}
                    onOpenCapture={onOpenCapture}
                    onSubmit={onCreateTicket}
                  />
                </Box>
                <Fade in={isDone}>
                  <Box>
                    <BoxThanks
                      text={
                        "ありがとうございます。フィードバックを送信しました。"
                      }
                      onReset={onReset}
                    />
                  </Box>
                </Fade>
              </Collapse>
            </Box>
            {hasHelps && (
              <>
                <Divider />
                <KnockrFormHelps
                  inputPlaceholder={"何かお困りですか？"}
                  helps={widget.helps}
                />
              </>
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
