import { Divider, Paper, Stack, Typography } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { useClient } from "../hooks"
import { KnockrBoxEmotion } from "./KnockrBoxEmotion"
import { KnockrBoxHelps } from "./KnockrBoxHelps"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFormTicket } from "./KnockrFormTicket"

type Props = {
  hasHelps: boolean
}

export const KnockrCard: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const onCreate = async () => {
    try {
      await client.tickets().create({
        path: "xxxx",
        type: null,
        text: formText,
        imageText: null,
        emotionId: null,
      })
      setFormText("")
      setFormImageText(null)
    } catch (error) {
      captureException(error)
    }
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
          <Stack spacing={1} sx={{ p: 2 }}>
            <Typography fontSize={14} color={"text.secondary"}>
              {"このページはお役に立ちましたか？"}
            </Typography>
            <KnockrBoxEmotion />
          </Stack>
          <Divider />
          <KnockrFormTicket
            onChangeText={onChangeText}
            onOpenCapture={onOpenCapture}
            onSubmit={onCreate}
            text={formText}
          />
          {hasHelps && <KnockrBoxHelps helps={widget.helps} />}
        </Stack>
      </Paper>
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
