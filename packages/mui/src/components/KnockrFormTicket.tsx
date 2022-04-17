import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBackRounded"
import PhotoCamera from "@mui/icons-material/PhotoCameraRounded"
import { LoadingButton } from "@mui/lab"
import { IconButton, InputBase, Stack } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  text: string
  inputPlaceholder: string
  buttonText: string
  hasImage: boolean
  isLoading: boolean
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
        <IconButton
          onClick={props.onOpenCapture}
          size={"small"}
          color={props.hasImage ? "info" : "default"}
        >
          {props.hasImage ? <PhotoCameraBackIcon /> : <PhotoCamera />}
        </IconButton>
        <LoadingButton
          size={"small"}
          variant={"contained"}
          sx={{ flex: 1 }}
          onClick={props.onSubmit}
          disabled={props.text.length < 4}
          loading={props.isLoading}
        >
          {props.buttonText}
        </LoadingButton>
      </Stack>
    </Stack>
  )
}
