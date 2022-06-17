import React, { FC } from "react"
import { BiX } from "react-icons/bi"

type Props = {
  onClick?(): void
}

export const ButtonClose: FC<Props> = (props) => {
  return (
    <button
      className={
        "cursor-pointer rounded-full border-none bg-white p-0.5 hover:bg-slate-50 active:bg-slate-100 dark:bg-slate-900"
      }
      onClick={props.onClick}
    >
      <BiX className={"block fill-slate-500"} size={24} />
    </button>
  )
}
