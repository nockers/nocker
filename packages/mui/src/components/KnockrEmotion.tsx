import { Collapse, Fade, IconButton, Stack, Typography } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useEffect, useState, VFC } from "react"
import { TransitionGroup } from "react-transition-group"
import { WidgetContext } from "../contexts"
import { useClient } from "../hooks"
import { toEmotionColor } from "../utils"
import { KnockrIconEmotion } from "./KnockrIconEmotion"

type Props = {
  endMessage?: string
  onSubmit?(): void
}

export const KnockrEmotion: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const client = useClient()

  const [isOpenMessage, openMessage] = useState(false)

  const [formText, setFormText] = useState("")

  const [emotions, setEmotions] = useState<(0 | 1 | 2 | 3 | 4)[]>([
    0, 1, 2, 3, 4,
  ])

  const [selectedEmotion = null] = emotions.length === 1 ? emotions : []

  useEffect(() => {
    if (emotions.length !== 1) return
    const id = setTimeout(() => {
      openMessage(true)
    }, 400)
    return () => {
      clearTimeout(id)
    }
  }, [emotions])

  const onSubmit = async () => {
    try {
      await client.tickets().create({
        type: null,
        text: formText,
        imageText: null,
      })
      setFormText("")
    } catch (error) {
      captureException(error)
    }
  }

  const onClick = (emotion: 0 | 1 | 2 | 3 | 4) => {
    setEmotions([emotion])

    if (typeof props.onSubmit !== "undefined") {
      props.onSubmit()
    }

    onSubmit()
  }

  return (
    <Stack direction={"row"} alignItems={"center"}>
      <TransitionGroup>
        {emotions.map((emotion) => (
          <Collapse
            key={emotion}
            orientation={"horizontal"}
            sx={{
              display: "inline-block",
              verticalAlign: "top",
              mr: 1,
              height: "2.5rem",
              overflow: "hidden",
            }}
          >
            <IconButton
              color={
                isOpenMessage ? toEmotionColor(selectedEmotion) : "default"
              }
              onClick={() => {
                onClick(emotion)
              }}
            >
              <KnockrIconEmotion emotion={emotion} />
            </IconButton>
          </Collapse>
        ))}
      </TransitionGroup>
      {isOpenMessage && (
        <Fade in={isOpenMessage}>
          <Typography>
            {props.endMessage ?? "ありがとうございました！"}
          </Typography>
        </Fade>
      )}
    </Stack>
  )
}
