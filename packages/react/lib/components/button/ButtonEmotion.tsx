import type { EmotionGrade } from "@nocker/client"
import clsx from "clsx"
import React, { FC } from "react"
import { useStateComponent } from "../../hooks"
import { IconEmotion } from "../icon/IconEmotion"

type Props = {
  grade: EmotionGrade
  isActive: boolean
  isLoading?: boolean
  isDisabled?: boolean
  onClick(): void
}

export const ButtonEmotion: FC<Props> = (props) => {
  const state = useStateComponent({
    isActive: props.isActive,
    isLoading: props.isLoading,
    isDisabled: props.isDisabled,
  })

  const isColorVeryBad = state.isActive && props.grade === 0

  const isColorBad = state.isActive && props.grade === 1

  const isColorNeutral = state.isActive && props.grade === 2

  const isColorGood = state.isActive && props.grade === 3

  const isColorVeryGood = state.isActive && props.grade === 4

  return (
    <button
      className={clsx(
        "box-border h-10 w-10 rounded-full border-none bg-transparent p-2 transition focus:ring-nocker-300",
        state.isDefault &&
          "cursor-pointer hover:bg-neutral-500/10 active:bg-neutral-500/20",
      )}
      disabled={state.isDisabled}
      onClick={props.onClick}
    >
      <IconEmotion
        grade={props.grade}
        className={clsx(
          state.isDefault && "fill-neutral-500 dark:fill-neutral-300",
          isColorVeryBad && "fill-red-600 dark:fill-red-400",
          isColorBad && "fill-red-600 dark:fill-red-300",
          isColorNeutral && "fill-neutral-600 dark:fill-neutral-400",
          isColorGood && "fill-green-600 dark:fill-green-400",
          isColorVeryGood && "fill-green-600 dark:fill-green-300",
        )}
      />
    </button>
  )
}
