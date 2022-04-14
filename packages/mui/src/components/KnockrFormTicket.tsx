import PhotoCamera from "@mui/icons-material/PhotoCameraRounded"
import { Button, IconButton, InputBase, Stack } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  placeholder?: string
  buttonText?: string
  onChangeText(text: string): void
  onSubmit(): Promise<void>
  onOpenCapture(): void
  text: string
}

export const KnockrFormTicket: VFC<Props> = (props) => {
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
        <IconButton onClick={props.onOpenCapture} size={"small"}>
          <PhotoCamera />
        </IconButton>
        <Button
          size={"small"}
          variant={"outlined"}
          sx={{ flex: 1 }}
          onClick={props.onSubmit}
        >
          {props.buttonText ?? defaultButtonText}
        </Button>
      </Stack>
    </Stack>
  )
}
