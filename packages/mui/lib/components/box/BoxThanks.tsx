import DoneOutlineIcon from "@mui/icons-material/DoneOutlineRounded"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { FC } from "react"

type Props = {
  message: string
  buttonText: string
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
        background: (theme) => theme.palette.background.paper,
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
          <Typography fontSize={14}>{props.message}</Typography>
          <Button
            size={"small"}
            sx={{ width: "100%", maxWidth: "8rem" }}
            onClick={props.onReset}
          >
            {props.buttonText}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
