import CloseIcon from "@mui/icons-material/CloseRounded"
import { IconButton, Paper, Stack } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  onClose(): void
}

export const KnockrFloatingCardHeader: VFC<Props> = (props) => {
  return (
    <Paper sx={{ borderRadius: 0, borderWidth: 0, width: "100%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        spacing={2}
        sx={{ p: 1 }}
      >
        <IconButton
          size={"small"}
          onClick={props.onClose}
          aria-label={"閉じる"}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </Paper>
  )
}
