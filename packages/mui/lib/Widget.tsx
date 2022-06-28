import {
  Box,
  Card,
  Collapse,
  Divider,
  Fade,
  Stack,
  Typography,
} from "@mui/material"
import { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import {
  ConfigContext,
  WidgetEmotionSubmit,
  WidgetTicketSubmit,
  useMutationEmotion,
  useMutationTicket,
  useWidgetConfig,
} from "@nocker/react"
import React, { FC, useContext } from "react"
import { BoxFormEmotion } from "./components/box/BoxFormEmotion"
import { BoxFormEmotionTwo } from "./components/box/BoxFormEmotionTwo"
import { BoxFormHelps } from "./components/box/BoxFormHelps"
import { BoxFormTicket } from "./components/box/BoxFormTicket"
import { BoxThanks } from "./components/box/BoxThanks"
import { ButtonClose } from "./components/button/ButtonClose"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  isNotEmbedded?: boolean
  onClose?(): void
  onSubmitted?(data: Ticket | Emotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const Widget: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const mutationEmotion = useMutationEmotion({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    emotionType: "FIVE",
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmitEmotion,
    onError: props.onError,
    ticketId() {
      return mutationTicket.ticketId
    },
  })

  const mutationTicket = useMutationTicket({
    pagePath: props.pagePath,
    pageTitle: props.pageTitle,
    onSubmitted: props.onSubmitted,
    onSubmit: props.onSubmitTicket,
    onError: props.onError,
    onDone: props.onDone,
    emotionId() {
      return mutationEmotion.emotionId
    },
  })

  const hasHelps = false

  const hasEmotion = widgetConfig.emotionType !== null

  const isOpenTicket =
    !widgetConfig.isMinimal ||
    !hasEmotion ||
    mutationEmotion.emotionGrade !== null

  const onReset = () => {
    mutationEmotion.reset()
    mutationTicket.reset()
  }

  const hasCloseButton = typeof props.onClose !== "undefined"

  return (
    <Card
      variant={"outlined"}
      sx={{
        width: props.isNotEmbedded ? (theme) => theme.spacing(40) : "100%",
        maxWidth: (theme) => theme.spacing(40),
        borderWidth: widgetConfig.hasBorder ? 1 : 0,
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
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
              sx={{ pt: 1, pl: 2, pr: 1 }}
            >
              <Typography fontSize={14} color={"text.secondary"}>
                {widgetConfig.emotionQuestionMessage}
              </Typography>
              {hasCloseButton ? (
                <ButtonClose onClose={props.onClose} />
              ) : (
                <Box sx={{ width: 34, height: 34 }} />
              )}
            </Stack>
          )}
          {widgetConfig.emotionType === "FIVE" && (
            <Box sx={{ pb: 0.75, px: 0.75 }}>
              <BoxFormEmotion
                config={{
                  gradeFiveMessage: widgetConfig.emotionFiveGradeFiveMessage,
                  gradeFourMessage: widgetConfig.emotionFiveGradeFourMessage,
                  gradeThreeMessage: widgetConfig.emotionFiveGradeThreeMessage,
                  gradeTwoMessage: widgetConfig.emotionFiveGradeTwoMessage,
                  gradeOneMessage: widgetConfig.emotionFiveGradeOneMessage,
                }}
                grade={mutationEmotion.emotionGrade}
                onSelect={(grade) => {
                  mutationEmotion.createEmotion(grade)
                }}
              />
            </Box>
          )}
          {widgetConfig.emotionType === "TWO" && (
            <Box sx={{ pt: 0.5, pb: 1.25, px: 1.25 }}>
              <BoxFormEmotionTwo
                config={{
                  gradeOneMessage: widgetConfig.emotionTwoGradeOneMessage,
                  gradeTwoMessage: widgetConfig.emotionTwoGradeTwoMessage,
                  thanksMessage: widgetConfig.emotionThanksMessage,
                }}
                grade={mutationEmotion.emotionGrade}
                onSelect={(grade) => {
                  mutationEmotion.createEmotion(grade)
                }}
              />
            </Box>
          )}
          {!hasEmotion && (
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              sx={{ pt: 1, px: 1 }}
            >
              {hasCloseButton ? (
                <ButtonClose onClose={props.onClose} />
              ) : (
                <Box sx={{ width: 34, height: 34 }} />
              )}
            </Stack>
          )}
          <Collapse in={isOpenTicket}>
            {hasEmotion && <Divider />}
            <Box sx={{ pl: 2, pr: 2, pt: hasEmotion ? 2 : 0.5, pb: 2 }}>
              <BoxFormTicket
                config={{
                  buttonSubmitText: widgetConfig.ticketButtonSubmitText,
                  inputPlaceholder: widgetConfig.ticketInputPlaceholder,
                }}
                text={mutationTicket.text}
                isLoading={mutationTicket.isLoading}
                onChangeText={(text) => {
                  mutationTicket.updateText(text)
                }}
                onSubmit={() => {
                  mutationTicket.createTicket()
                }}
              />
            </Box>
            <Fade in={mutationTicket.isDone}>
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
            <BoxFormHelps
              inputPlaceholder={"何かお困りですか？"}
              helps={config.helps}
            />
          </>
        )}
      </Stack>
    </Card>
  )
}
