import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded"
import { Box, Fab } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  config: {
    text: string | null
  }
  onOpen(): void
}

export const ButtonTrigger: VFC<Props> = (props) => {
  return (
    <Fab
      variant={"extended"}
      onClick={props.onOpen}
      aria-label={props.config.text ?? "ボタン"}
    >
      <AutoAwesomeIcon />
      {props.config.text !== null && (
        <Box sx={{ pl: 1 }}>{props.config.text}</Box>
      )}
    </Fab>
  )
}
