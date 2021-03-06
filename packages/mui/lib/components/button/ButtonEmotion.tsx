import { IconButton } from "@mui/material"
import { EmotionGrade } from "@nocker/client"
import React, { FC } from "react"
import { useEmotionColor } from "../../hooks"
import { IconEmotion } from "../icon/IconEmotion"

type Props = {
  grade: EmotionGrade
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
