import React, { FC } from "react"
import { BiX } from "react-icons/bi"

type Props = {
  onClick?(): void
}

export const ButtonClose: FC<Props> = (props) => {
  return (
    <button
      className={
        "cursor-pointer rounded-full border-none bg-white p-1 hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900"
      }
      onClick={props.onClick}
    >
      <BiX className={"block fill-neutral-500"} size={26} />
    </button>
  )
}
