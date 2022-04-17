import CloseIcon from "@mui/icons-material/CloseRounded"
import { IconButton, Paper, Stack, Typography } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  title?: string | null
  onClose(): void
}

export const KnockrFloatingCardHeader: VFC<Props> = (props) => {
  return (
    <Paper sx={{ borderRadius: 0, borderWidth: 0, width: "100%" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
        sx={{ p: 1 }}
      >
        <Stack sx={{ pl: 1 }}>
          {typeof props.title === "string" && (
            <Typography fontSize={14}>{props.title}</Typography>
          )}
        </Stack>
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
