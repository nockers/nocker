import PhotoCamera from "@mui/icons-material/PhotoCameraRounded"
import { Button, InputBase, Stack } from "@mui/material"
import React, { useState, VFC } from "react"

type Props = {
  placeholder?: string
  buttonText?: string
  onChangeText(text: string): void
  onSubmit(): Promise<void>
  onOpenCapture(): void
  text: string
}

export const KnockrFormTicket: VFC<Props> = (props) => {
  const [isOpenCapture, openCapture] = useState(false)

  const [imageText, setImageText] = useState<string | null>(null)

  const defautPlaceholder =
    "製品の改善についてご意見・ご要望をお聞かせください。"

  const defaultButtonText = "送信する"

  return (
    <Stack sx={{ p: 2 }} spacing={2}>
      <InputBase
        multiline
        rows={4}
        placeholder={props.placeholder ?? defautPlaceholder}
        value={props.text}
        onChange={(event) => {
          props.onChangeText(event.target.value)
        }}
      />
      <Stack direction={"row"} spacing={2}>
        <Button
          size={"small"}
          variant={"outlined"}
          startIcon={<PhotoCamera />}
          onClick={props.onOpenCapture}
        >
          {"スクショ"}
        </Button>
        <Button
          size={"small"}
          variant={"outlined"}
          onClick={props.onSubmit}
          sx={{ flex: 1 }}
        >
          {props.buttonText ?? defaultButtonText}
        </Button>
      </Stack>
    </Stack>
  )
}
