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

export const NockerFormEmotionOne: FC<Props> = (props) => {
  return (
    <Button
      startIcon={<FavoriteIcon />}
      color={props.isActive ? "primary" : "inherit"}
      aria-label={props.config.buttonText}
      sx={{ letterSpacing: 1, fontSize: 16, lineHeight: 1, px: 2 }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Typography fontSize={14}>{props.config.buttonText}</Typography>
        <Typography>{20}</Typography>
      </Stack>
    </Button>
  )
}
