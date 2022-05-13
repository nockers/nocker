import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBackRounded"
import PhotoCamera from "@mui/icons-material/PhotoCameraRounded"
import { LoadingButton } from "@mui/lab"
import { IconButton, InputBase, Stack } from "@mui/material"
import React, { FC } from "react"

type Props = {
  config: {
    buttonSubmitText: string
    inputPlaceholder: string
  }
  text: string
  isLoading: boolean
  hasImage: boolean
  onChangeText(text: string): void
  onSubmit(): Promise<void>
  onOpenCapture(): void
}

export const KnockrFormTicket: FC<Props> = (props) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      <Stack sx={{ pl: 1, flex: 1 }}>
        <InputBase
          fullWidth
          multiline
          rows={3}
          placeholder={props.config.inputPlaceholder}
          value={props.text}
          sx={{ p: 0 }}
          onChange={(event) => {
            props.onChangeText(event.target.value)
          }}
        />
      </Stack>
      <Stack direction={"row"} spacing={1} sx={{ pl: 0 }}>
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
          {props.config.buttonSubmitText}
        </LoadingButton>
      </Stack>
    </Stack>
  )
}
