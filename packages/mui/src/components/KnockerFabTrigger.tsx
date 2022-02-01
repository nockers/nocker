import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded"
import { Box, Fab } from "@mui/material"
import React, { FunctionComponent, useEffect, useState } from "react"

type Props = {
  onOpen(): void
}

export const KnockerFabTrigger: FunctionComponent<Props> = (props) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {}, [])

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
