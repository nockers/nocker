import clsx from "clsx"
import React, { FC, ReactNode } from "react"
import { useStateComponent } from "../../hooks"

type Props = {
  children: ReactNode
  onClick(): void
  isLoading?: boolean
  isDisabled?: boolean
}

export const ButtonFilled: FC<Props> = (props) => {
  // const theme = useContext(ThemeContext)

  const state = useStateComponent({
    isLoading: props.isLoading,
    isDisabled: props.isDisabled,
  })

  return (
    <button
      className={clsx(
        "w-full rounded-md border-none bg-nocker-500 py-1.5 font-sans font-bold text-white focus:ring-nocker-300",
        state.isDefault &&
          "cursor-pointer hover:bg-nocker-500/90 focus:ring active:bg-nocker-600",
        state.isDisabled && "cursor-not-allowed opacity-70",
        state.isLoading && "cursor-progress opacity-80",
      )}
      disabled={state.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
