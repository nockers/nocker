import PhotoCamera from "@mui/icons-material/PhotoCameraRounded"
import { Button, IconButton, InputBase, Stack } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  text: string
  inputPlaceholder: string
  buttonText: string
  onChangeText(text: string): void
  onSubmit(): Promise<void>
  onOpenCapture(): void
}

export const KnockrFormTicket: VFC<Props> = (props) => {
  return (
    <Stack sx={{ p: 2 }} spacing={2}>
      <InputBase
        multiline
        rows={4}
        placeholder={props.inputPlaceholder}
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
          disabled={props.text.length < 4}
        >
          {props.buttonText}
        </Button>
      </Stack>
    </Stack>
  )
}
