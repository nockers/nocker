import FavoriteIcon from "@mui/icons-material/FavoriteRounded"
import { Button, Stack, Typography } from "@mui/material"
import React, { FC } from "react"

type Props = {
  config: {
    buttonText: string
  }
  isActive: boolean
  onClick(): void
}

export const BoxFormEmotionOne: FC<Props> = (props) => {
  return (
    <Button
      color={props.isActive ? "primary" : "inherit"}
      aria-label={props.config.buttonText}
      sx={{ px: 2 }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <FavoriteIcon sx={{ display: "flex" }} />
        <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
          {props.config.buttonText}
        </Typography>
        <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>{20}</Typography>
      </Stack>
    </Button>
  )
}
