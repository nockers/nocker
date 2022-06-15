import React, { FC } from "react"
import { ButtonFilledTonal } from "../button/ButtonFilledTonal"

type Props = {
  message: string
  buttonText: string
  onClick(): void
}

export const DivThanks: FC<Props> = (props) => {
  return (
    <div
      className={
        "absolute top-0 left-0 box-border grid h-full w-full content-center gap-y-4 bg-white px-4"
      }
    >
      <div className={"font-sans text-sm"}>{props.message}</div>
      <div className={"grid justify-center"}>
        <div className={"w-24"}>
          <ButtonFilledTonal onClick={props.onClick}>
            {props.buttonText}
          </ButtonFilledTonal>
        </div>
      </div>
    </div>
  )
}
