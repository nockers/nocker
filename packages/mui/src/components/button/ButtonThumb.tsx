import { WidgetGrade } from "@knockr/client"
import ThumbDownIcon from "@mui/icons-material/ThumbDownRounded"
import ThumbUpIcon from "@mui/icons-material/ThumbUpRounded"
import { Button, Typography } from "@mui/material"
import React, { FC, ReactNode } from "react"
import { useEmotionColor } from "../../hooks"

type Props = {
  children: ReactNode
  grade: WidgetGrade
  isActive: boolean
  isDisabled: boolean
  onClick(): void
}

export const ButtonThumb: FC<Props> = (props) => {
  const color = useEmotionColor(props.grade === 0 ? 0 : 5)

  if (props.grade === 0) {
    return (
      <Button
        startIcon={<ThumbDownIcon />}
        color={props.isActive ? color : "inherit"}
        disabled={props.isDisabled}
        onClick={props.onClick}
        sx={{ minWidth: "max-content" }}
      >
        <Typography
          sx={{
            lineHeight: 1,
            color: "text.secondary",
            fontSize: 14,
          }}
        >
          {props.children}
        </Typography>
      </Button>
    )
  }

  return (
    <Button
      startIcon={<ThumbUpIcon />}
      color={props.isActive ? color : "inherit"}
      disabled={props.isDisabled}
      onClick={props.onClick}
      sx={{ minWidth: "max-content" }}
    >
      <Typography
        sx={{
          lineHeight: 1,
          color: "text.secondary",
          fontSize: 14,
        }}
      >
        {props.children}
      </Typography>
    </Button>
  )
}
