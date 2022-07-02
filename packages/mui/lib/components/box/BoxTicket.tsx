import { InputBase } from "@mui/material"
import React, { FC } from "react"

type Props = {
  placeholder: string
  value: string
  isLoading: boolean
  onChangeText(text: string): void
}

export const InputTicket: FC<Props> = (props) => {
  return (
    <InputBase
      fullWidth
      multiline
      rows={3}
      placeholder={props.placeholder}
      value={props.value}
      sx={{ p: 0 }}
      onChange={(event) => {
        props.onChangeText(event.target.value)
      }}
    />
  )
}
