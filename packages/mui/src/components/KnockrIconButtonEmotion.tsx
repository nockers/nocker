import { WidgetGrade } from "@knockr/client"
import { IconButton } from "@mui/material"
import React, { VFC } from "react"
import { useEmotionColor } from "../utils"
import { KnockrIconEmotion } from "./KnockrIconEmotion"

type Props = {
  grade: WidgetGrade
  isActive: boolean
  onClick(): void
}

export const KnockrIconButtonEmotion: VFC<Props> = (props) => {
  const color = useEmotionColor(props.grade)

  return (
    <IconButton
      color={props.isActive ? color : "default"}
      onClick={props.onClick}
    >
      <KnockrIconEmotion grade={props.grade} />
    </IconButton>
  )
}
