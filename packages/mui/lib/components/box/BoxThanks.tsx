import DoneOutlineIcon from "@mui/icons-material/DoneOutlineRounded"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { FC } from "react"

type Props = {
  config: {
    thanksMessage: string
    buttonResetText: string
  }
  isMinimal?: boolean
  onReset(): void
}

export const BoxThanks: FC<Props> = (props) => {
  const hasIcon = props.isMinimal !== true

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        background: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100%" }}
      >
        <Stack spacing={2} sx={{ p: 4 }} alignItems={"center"}>
          {hasIcon && <DoneOutlineIcon sx={{ fontSize: 40 }} />}
          <Typography fontSize={14}>{props.config.thanksMessage}</Typography>
          <Button
            size={"small"}
            sx={{ width: "100%", maxWidth: "8rem" }}
            onClick={props.onReset}
          >
            {props.config.buttonResetText}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
