import {
  Box,
  Card,
  Collapse,
  Divider,
  Fade,
  Stack,
  Typography,
} from "@mui/material"
import {
  WidgetConfig,
  WidgetEmotion,
  WidgetGrade,
  WidgetTicket,
} from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "../types"
import { NockerFormEmotion } from "./box/BoxFormEmotion"
import { NockerFormEmotionTwo } from "./box/BoxFormEmotionTwo"
import { NockerFormHelps } from "./box/BoxFormHelps"
import { NockerFormTicket } from "./box/BoxFormTicket"
import { BoxThanks } from "./box/BoxThanks"
import { ButtonClose } from "./button/ButtonClose"
import { NockerCapure } from "./NockerCapure"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasHelps?: boolean
  hasBorder?: boolean | null
  isNotEmbedded?: boolean
  onClose?(): void
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerCard: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const [emotionGrade, setEmotionGrade] = useState<WidgetGrade | null>(null)

  const [emotionId, setEmotionId] = useState<string | null>(null)

  const [ticketId, setTicketId] = useState<string | null>(null)

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onCreateEmotion = async (emotionGrade: WidgetGrade) => {
    if (config.isLoggingIn) return
    if (emotionGrade === null) return
    setEmotionGrade(emotionGrade)
    if (client !== null) {
      const emotion = await client.emotions().create({
        pagePath: props.pagePath || window.location.pathname,
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
      setEmotionId(emotion.id)
      props.onSubmitted?.(emotion)
    }
    if (client === null) {
      const emotion: WidgetEmotionSubmit = {
        grade: emotionGrade,
        type: "FIVE",
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
      }
      setEmotionId("xxxxxxxxxxxxxxxxxxxxx")
      props.onSubmitEmotion?.(emotion)
    }
  }

  const onCreateTicket = async () => {
    if (config.isLoggingIn) return
    if (formText.length < 2) return
    setLoading(true)
    if (client !== null) {
      const ticket = await client.tickets().create({
        pagePath: props.pagePath || window.location.pathname,
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
    }
    if (client === null) {
      const ticket: WidgetTicketSubmit = {
        type: null,
        text: formText,
        imageText: formImageText,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
        emotionGrade: emotionGrade,
        emotionType: "FIVE",
      }
      await new Promise((resolve) => setTimeout(resolve, 500))
      markAsDone(true)
      props.onSubmitTicket?.(ticket)
    }
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
      setEmotionId(null)
      setTicketId(null)
      markAsDone(false)
    }
    props.onDone?.()
  }

  const hasHelps = false && 0 < config.helps.length

  const hasEmotion = widgetConfig.emotionType !== null

  const isOpenTicket =
    !widgetConfig.isMinimal || !hasEmotion || emotionId !== null

  const isShowCard = props.isNotEmbedded !== true || !isOpenCapture

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
              {widgetConfig.emotionType !== null && (
                <Box sx={{ pt: 1, pl: 2, pr: 1 }}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing={1}
                  >
                    <Typography fontSize={14} color={"text.secondary"}>
                      {widgetConfig.emotionQuestionMessage}
                    </Typography>
                    <ButtonClose onClose={props.onClose} />
                  </Stack>
                </Box>
              )}
              {widgetConfig.emotionType === "FIVE" && (
                <Box sx={{ pb: 0.75, px: 0.75 }}>
                  <NockerFormEmotion
                    config={{
                      gradeFiveMessage:
                        widgetConfig.emotionFiveGradeFiveMessage,
                      gradeFourMessage:
                        widgetConfig.emotionFiveGradeFourMessage,
                      gradeThreeMessage:
                        widgetConfig.emotionFiveGradeThreeMessage,
                      gradeTwoMessage: widgetConfig.emotionFiveGradeTwoMessage,
                      gradeOneMessage: widgetConfig.emotionFiveGradeOneMessage,
                    }}
                    grade={emotionGrade}
                    onSelect={onCreateEmotion}
                  />
                </Box>
              )}
              {widgetConfig.emotionType === "TWO" && (
                <Box sx={{ pt: 0.5, pb: 1.25, px: 1.25 }}>
                  <NockerFormEmotionTwo
                    config={{
                      gradeOneMessage: widgetConfig.emotionTwoGradeOneMessage,
                      gradeTwoMessage: widgetConfig.emotionTwoGradeTwoMessage,
                      thanksMessage: widgetConfig.emotionThanksMessage,
                    }}
                    grade={emotionGrade}
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
                  <NockerFormTicket
                    config={{
                      buttonSubmitText: widgetConfig.ticketButtonSubmitText,
                      inputPlaceholder: widgetConfig.ticketInputPlaceholder,
                    }}
                    text={formText}
                    isLoading={isLoading}
                    hasImage={formImageText !== null}
                    onChangeText={onChangeText}
                    onOpenCapture={onOpenCapture}
                    onSubmit={onCreateTicket}
                  />
                </Box>
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
              </Collapse>
            </Box>
            {hasHelps && (
              <>
                <Divider />
                <NockerFormHelps
                  inputPlaceholder={"何かお困りですか？"}
                  helps={config.helps}
                />
              </>
            )}
          </Stack>
        </Card>
      )}
      {isOpenCapture && (
        <NockerCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
