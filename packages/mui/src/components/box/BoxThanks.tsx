import DoneOutlineIcon from "@mui/icons-material/DoneOutlineRounded"
import { Box, Button, Stack, Typography } from "@mui/material"
import React, { VFC } from "react"

type Props = {
  text: string
  onReset(): void
}

export const BoxThanks: VFC<Props> = (props) => {
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
          <DoneOutlineIcon sx={{ fontSize: 40 }} />
          <Typography fontSize={14}>{props.text}</Typography>
          <Button
            size={"small"}
            sx={{ width: "100%", maxWidth: "8rem" }}
            onClick={props.onReset}
          >
            {"続ける"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
