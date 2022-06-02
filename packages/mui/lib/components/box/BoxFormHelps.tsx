import SearchIcon from "@mui/icons-material/SearchRounded"
import { InputBase, Stack } from "@mui/material"
import { WidgetHelp } from "@nocker/client"
import React, { FC } from "react"
import { NockerListHelps } from "../list/ListHelps"

type Props = {
  inputPlaceholder: string
  helps: WidgetHelp[]
  onOpen?(): void
}

export const BoxFormHelps: FC<Props> = (props) => {
  return (
    <Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        sx={{ px: 1.5, pt: 1 }}
      >
        <SearchIcon fontSize={"small"} />
        <InputBase
          sx={{ flex: 1, fontSize: 14 }}
          placeholder={props.inputPlaceholder}
          onClick={() => {
            props.onOpen?.()
          }}
        />
      </Stack>
      <NockerListHelps helps={props.helps} />
    </Stack>
  )
}
