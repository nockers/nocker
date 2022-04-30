import CloseIcon from "@mui/icons-material/CloseRounded"
import { Box, IconButton } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  onClose?(): void
}

export const ButtonClose: VFC<Props> = (props) => {
  if (typeof props.onClose === "undefined") {
    return <Box sx={{ width: 34, height: 34 }} />
  }

  return (
    <IconButton size={"small"} onClick={props.onClose} aria-label={"閉じる"}>
      <CloseIcon />
    </IconButton>
  )
}
