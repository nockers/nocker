import { WidgetEmotion, WidgetTicket } from "@knockr/client"
import { Box, Grow } from "@mui/material"
import React, { useState, VFC } from "react"
import { ButtonTrigger } from "./button/ButtonTrigger"
import { KnockrCard } from "./KnockrCard"

type Props = {
  pagePath?: string
  pageTitle?: string
  hasHelps: boolean
  emotionType?: "FIVE" | "TWO" | null
  emotionMessage?: string | null
  emotionThanksMessage?: string | undefined
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
  onDone?(): void
}

export const KnockrFab: VFC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
    props.onClose?.()
  }

  const onOpen = () => {
    setOpen(true)
    props.onOpen?.()
  }

  const onDone = () => {
    setOpen(false)
    props.onDone?.()
  }

  return (
    <>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockrCard
            pagePath={props.pagePath}
            isNotEmbedded={true}
            hasHelps={props.hasHelps}
            emotionType={props.emotionType}
            emotionMessage={props.emotionMessage}
            emotionThanksMessage={props.emotionThanksMessage}
            onClose={onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
            onDone={onDone}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <ButtonTrigger onOpen={onOpen} />
        </Box>
      </Grow>
    </>
  )
}
