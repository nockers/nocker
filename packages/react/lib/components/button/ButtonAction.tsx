import React, { FC } from "react"
import { BiMessageSquareDots } from "react-icons/bi"

type Props = {
  icon: string | null
  text: string | null
  onClick(): void
}

export const ButtonAction: FC<Props> = (props) => {
  if (props.icon !== null) {
    return (
      <button
        className={
          "cursor-pointer rounded-full border-none bg-white p-3 shadow-lg hover:bg-slate-50 active:bg-slate-100 dark:bg-slate-900"
        }
        onClick={props.onClick}
      >
        <BiMessageSquareDots
          className={"block fill-cyan-600 stroke-cyan-600 stroke-1"}
          size={32}
        />
      </button>
    )
  }

  if (props.text !== null) {
    return (
      <button
        className={
          "cursor-pointer overflow-hidden rounded-full border-none bg-white px-4 py-2 font-sans shadow-md hover:bg-slate-50 active:bg-slate-100 dark:bg-slate-900"
        }
        onClick={props.onClick}
      >
        {props.text}
      </button>
    )
  }

  return (
    <button
      className={
        "cursor-pointer overflow-hidden rounded-full border-none bg-white p-0 shadow-md hover:bg-slate-50 active:bg-slate-100 dark:bg-slate-900"
      }
      onClick={props.onClick}
    >
      <img
        className={"block h-14 w-14"}
        src={"https://nocker.app/nocker.png"}
      />
    </button>
  )
}
