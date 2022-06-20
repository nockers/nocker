import { Button } from "@chakra-ui/react"
import type { EmotionGrade } from "@nocker/client"
import React, { FC, ReactNode } from "react"
import { BiLike, BiDislike } from "react-icons/bi"
import { useStateComponent } from "../../hooks"

type Props = {
  children: ReactNode
  grade: EmotionGrade
  isActive: boolean
  isDisabled: boolean
  onClick(): void
}

export const ButtonThumb: FC<Props> = (props) => {
  const state = useStateComponent({
    isActive: props.isActive,
    isDisabled: props.isDisabled,
  })

  if (props.grade === 0) {
    return (
      <Button
        disabled={state.isDisabled}
        onClick={props.onClick}
        variant="ghost"
      >
        <BiDislike size={20} />
        <div>{props.children}</div>
      </Button>
    )
  }

  return (
    <Button disabled={state.isDisabled} onClick={props.onClick} variant="ghost">
      <BiLike size={20} />
      <div>{props.children}</div>
    </Button>
  )
}
