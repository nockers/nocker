import clsx from "clsx"
import React, { FC, ReactNode } from "react"
import { CSSTransition } from "react-transition-group"

type Props = {
  in?: boolean
  withDelay?: boolean
  children: ReactNode
}

export const TransitionOpacity: FC<Props> = (props) => {
  return (
    <CSSTransition
      in={props.in}
      timeout={500}
      unmountOnExit
      classNames={{
        enter: "opacity-0",
        enterActive: "opacity-100 transition-opacity duration-500",
        enterDone: "opacity-100",
        exit: clsx("opacity-0 transition-opacity duration-500"),
        exitActive: clsx("opacity-0"),
      }}
    >
      {props.children}
    </CSSTransition>
  )
}
