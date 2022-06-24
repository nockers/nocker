import React, { FC } from "react"
import { BiMessageSquareDots } from "react-icons/bi"

type Props = {
  type: string
  icon: string | null
  text: string | null
  isLoading: boolean
  onClick(): void
}

export const ButtonFloating: FC<Props> = (props) => {
  if (props.type === "ICON") {
    return (
      <button
        className={
          "cursor-pointer rounded-full border-none bg-white p-3 shadow-lg hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900"
        }
        onClick={props.onClick}
      >
        <BiMessageSquareDots className={"block fill-cyan-600"} size={32} />
      </button>
    )
  }

  if (props.type === "TEXT") {
    return (
      <button
        className={
          "cursor-pointer overflow-hidden rounded-full border-none bg-white px-4 py-2 font-sans shadow-md hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900"
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
        "cursor-pointer overflow-hidden rounded-full border-none bg-white p-0 shadow-md hover:bg-neutral-50 active:bg-neutral-100 dark:bg-neutral-900"
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
