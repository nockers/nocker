import React, { FC, ReactNode } from "react"

type Props = {
  text: string
  children?: ReactNode
}

export const DivCardHeader: FC<Props> = (props) => {
  return (
    <div className={"grid grid-flow-col justify-between"}>
      <div className={"pt-4 pl-4"}>
        <div className={"font-sans text-sm text-gray-500 dark:text-gray-200"}>
          {props.text}
        </div>
      </div>
      <div className={"pr-3 pt-3"}>{props.children}</div>
    </div>
  )
}
