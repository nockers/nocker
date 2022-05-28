import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded"
import { Box, Fab } from "@mui/material"
import React, { FC } from "react"

type Props = {
  isLoggingIn: boolean
  config: {
    text: string | null
  }
  onOpen(): void
}

export const ButtonTrigger: FC<Props> = (props) => {
  return (
    <Fab
      aria-label={props.config.text ?? "ボタン"}
      variant={"extended"}
      disabled={props.isLoggingIn}
      onClick={props.onOpen}
    >
      <AutoAwesomeIcon />
      {props.config.text !== null && (
        <Box sx={{ pl: 1 }}>{props.config.text}</Box>
      )}
    </Fab>
  )
}
