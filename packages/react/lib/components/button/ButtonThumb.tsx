import type { EmotionGrade } from "@nocker/client"
import clsx from "clsx"
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
      <button
        className={clsx(
          "box-border grid min-w-max grid-flow-col justify-start gap-1 rounded-md border-none bg-transparent px-1 py-1.5 transition focus:ring-nocker-300",
          state.isDefault &&
            "cursor-pointer hover:bg-neutral-500/20 active:bg-neutral-500/40",
        )}
        disabled={state.isDisabled}
        onClick={props.onClick}
      >
        <BiDislike
          className={clsx(
            state.isDefault && "fill-neutral-600",
            state.isActive && "fill-red-800",
          )}
          size={20}
        />
        <div className={"font-sans text-sm font-bold"}>{props.children}</div>
      </button>
    )
  }

  return (
    <button
      className={clsx(
        "box-border grid min-w-max grid-flow-col justify-start gap-1 rounded-md border-none bg-transparent px-1 py-1.5 transition focus:ring-nocker-300",
        state.isDefault &&
          "cursor-pointer hover:bg-neutral-500/10 active:bg-neutral-500/20",
      )}
      disabled={state.isDisabled}
      onClick={props.onClick}
    >
      <BiLike
        size={20}
        className={clsx(
          state.isDefault && "fill-neutral-600",
          state.isActive && "fill-green-800",
        )}
      />
      <div className={"font-sans text-sm font-bold"}>{props.children}</div>
    </button>
  )
}
