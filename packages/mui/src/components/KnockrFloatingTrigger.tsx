import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded"
import { Box, Fab } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  onOpen(): void
}

export const KnockrFloatingTrigger: VFC<Props> = (props) => {
  return (
    <Fab
      variant={"extended"}
      onClick={props.onOpen}
      aria-label={"フィードバック"}
    >
      <AutoAwesomeIcon />
      <Box sx={{ pl: 1 }}>{"フィードバック"}</Box>
    </Fab>
  )
}
