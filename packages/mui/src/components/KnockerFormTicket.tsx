import { Button, InputBase, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"

type Form = {
  text: string
}

type Props = {
  placeholder?: string
  buttonText?: string
  onCreate(form: Form): Promise<void>
}

export const KnockerFormTicket: VFC<Props> = (props) => {
  const [text, setText] = useState("")

  const defautPlaceholder =
    "製品の改善についてご意見・ご要望をお聞かせください。"

  const defaultButtonText = "送信する"

  const onCreate = async () => {
    try {
      await props.onCreate({ text })
      setText("")
    } catch (error) {
      captureException(error)
    }
  }

  return (
    <Stack sx={{ p: 2, backgroundColor: "rgba(0,0,0,0.2)" }} spacing={2}>
      <InputBase
        multiline
        rows={4}
        placeholder={props.placeholder ?? defautPlaceholder}
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }}
      />
      <Button
        size={"small"}
        variant={"outlined"}
        sx={{ width: "100%" }}
        onClick={onCreate}
      >
        {props.buttonText ?? defaultButtonText}
      </Button>
    </Stack>
  )
}
