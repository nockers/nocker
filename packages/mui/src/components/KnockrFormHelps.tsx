import { WidgetHelp } from "@knockr/client"
import SearchIcon from "@mui/icons-material/SearchRounded"
import { InputBase, Stack } from "@mui/material"
import React, { VFC } from "react"
import { KnockrListHelps } from "./list/ListHelps"

type Props = {
  inputPlaceholder: string
  helps: WidgetHelp[]
  onOpen?(): void
}

export const KnockrFormHelps: VFC<Props> = (props) => {
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
      <KnockrListHelps helps={props.helps} />
    </Stack>
  )
}
