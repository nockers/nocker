import AutoAwesomeIcon from "@mui/icons-material/AutoAwesomeRounded"
import { Box, Fab } from "@mui/material"
import React, { FC } from "react"

type Props = {
  type: string
  icon: string | null
  text: string | null
  isLoading: boolean
  onClick(): void
}

export const ButtonFloating: FC<Props> = (props) => {
  if (props.type === "ICON") {
    return (
      <Fab
        aria-label={props.text ?? "ボタン"}
        disabled={props.isLoading}
        onClick={props.onClick}
      >
        <AutoAwesomeIcon />
      </Fab>
    )
  }

  if (props.type === "TEXT_WITH_ICON") {
    return (
      <Fab
        aria-label={props.text ?? "ボタン"}
        variant={"extended"}
        disabled={props.isLoading}
        onClick={props.onClick}
        size={"small"}
        sx={{ paddingRight: 2 }}
      >
        <AutoAwesomeIcon />
        <Box sx={{ pl: 1, fontWeight: "bold" }}>
          {props.text ?? "フィードバック"}
        </Box>
      </Fab>
    )
  }

  if (props.type === "TEXT") {
    return (
      <Fab
        aria-label={props.text ?? "ボタン"}
        variant={"extended"}
        disabled={props.isLoading}
        onClick={props.onClick}
        size={"small"}
        sx={{ paddingLeft: 2, paddingRight: 2, fontWeight: "bold" }}
      >
        {props.text ?? "フィードバック"}
      </Fab>
    )
  }

  return (
    <Fab
      onClick={props.onClick}
      sx={{
        background(theme) {
          return theme.palette.mode === "light"
            ? "white"
            : theme.palette.grey[800]
        },
      }}
    >
      <Box
        component={"img"}
        src={"https://nocker.app/nocker.png"}
        sx={{ width: 52, height: 52 }}
      />
    </Fab>
  )
}
