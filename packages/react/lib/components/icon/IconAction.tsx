import React, { FC } from "react"
import { BiMessageSquareDots } from "react-icons/bi"

type Props = {
  icon: string
}

export const IconAction: FC<Props> = (props) => {
  if (props.icon === "MESSAGE") {
    return (
      <BiMessageSquareDots
        className={"block fill-cyan-600 stroke-cyan-600 stroke-1"}
        size={32}
      />
    )
  }

  return null
}
