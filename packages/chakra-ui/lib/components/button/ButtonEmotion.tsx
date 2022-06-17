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
        "box-border h-10 w-10 rounded-full border-none bg-transparent p-2 focus:ring-nocker-300",
        state.isDefault &&
          "cursor-pointer hover:bg-gray-500/20 active:bg-gray-500/40",
      )}
      disabled={state.isDisabled}
      onClick={props.onClick}
    >
      <IconEmotion
        grade={props.grade}
        className={clsx(
          state.isDefault && "fill-gray-700 dark:fill-gray-300",
          isColorVeryBad && "fill-red-800 dark:fill-red-400",
          isColorBad && "fill-red-700 dark:fill-red-300",
          isColorNeutral && "fill-gray-700 dark:fill-gray-400",
          isColorGood && "fill-green-700 dark:fill-green-400",
          isColorVeryGood && "fill-green-800 dark:fill-green-300",
        )}
      />
    </button>
  )
}
