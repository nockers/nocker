import { WidgetGrade } from "@knockr/client"
import { IconButton } from "@mui/material"
import React, { FC } from "react"
import { useEmotionColor } from "../../hooks"
import { IconEmotion } from "../icon/IconEmotion"

type Props = {
  grade: WidgetGrade
  isActive: boolean
  onClick(): void
}

export const ButtonEmotion: FC<Props> = (props) => {
  const color = useEmotionColor(props.grade)

  return (
    <IconButton
      color={props.isActive ? color : "default"}
      onClick={props.onClick}
    >
      <IconEmotion grade={props.grade} />
    </IconButton>
  )
}
