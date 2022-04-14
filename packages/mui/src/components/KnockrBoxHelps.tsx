import { WidgetHelp } from "@knockr/client"
import SearchIcon from "@mui/icons-material/SearchRounded"
import { Box, Divider, InputBase, Stack } from "@mui/material"
import React, { VFC } from "react"
import { KnockrListHelps } from "./KnockrListHelps"

type Props = {
  helps: WidgetHelp[]
}

export const KnockrBoxHelps: VFC<Props> = (props) => {
  return (
    <Box>
      <Divider />
      <Stack>
        <Box sx={{ p: 1 }}></Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          sx={{ px: 2 }}
        >
          <SearchIcon fontSize={"small"} />
          <InputBase sx={{ flex: 1 }} placeholder={"何かお困りですか？"} />
        </Stack>
        <KnockrListHelps helps={props.helps} />
      </Stack>
    </Box>
  )
}
