import clsx from "clsx"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  onClick(): void
  isLoading?: boolean
  isDisabled?: boolean
}

export const ButtonFilledTonal: FC<Props> = (props) => {
  // const theme = useContext(ThemeContext)

  const isDefault = props.isLoading !== true && props.isDisabled !== true

  const isLoading = props.isLoading === true && props.isDisabled !== true

  const isDisabled = props.isDisabled === true

  return (
    <button
      className={clsx(
        "w-full rounded-md border-none bg-nocker-50 py-1.5 font-sans text-gray-900 text-white focus:ring-nocker-300",
        isDefault &&
          "cursor-pointer hover:bg-nocker-100 focus:ring active:bg-nocker-200",
        isDisabled && "cursor-not-allowed opacity-70",
        isLoading && "cursor-progress opacity-80",
      )}
      disabled={isDisabled || isLoading}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
