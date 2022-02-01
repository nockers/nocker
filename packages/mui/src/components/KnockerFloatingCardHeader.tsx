import CloseIcon from "@mui/icons-material/CloseRounded"
import { IconButton, Paper, Stack } from "@mui/material"
import React, { FunctionComponent } from "react"

type Props = {
  onClose(): void
}

export const KnockerFloatingCardHeader: FunctionComponent<Props> = (props) => {
  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        spacing={2}
        sx={{ p: 1 }}
      >
        <IconButton onClick={props.onClose} aria-label={"閉じる"}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </Paper>
  )
}
