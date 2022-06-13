import { Collapse } from "@mui/material"
import type { EmotionGrade } from "@nocker/client"
import React, { FC, useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"
import { ButtonThumb } from "../button/ButtonThumb"
import { TransitionOpacity } from "../transition/TransitionOpacity"

type Props = {
  config: {
    gradeOneMessage: string
    gradeTwoMessage: string
    thanksMessage: string
  }
  grade: EmotionGrade | null
  onSelect(grade: EmotionGrade): void
}

export const DivEmotionHand: FC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  useEffect(() => {
    if (props.grade === null) {
      openMessage(false)
      return
    }
    const timeout = setTimeout(() => {
      openMessage(true)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [props.grade])

  const onClickFactory = (grade: EmotionGrade) => {
    return () => {
      if (props.grade !== null) return
      props.onSelect(grade)
    }
  }

  return (
    <div className={"grid grid-flow-col justify-start gap-x-4"}>
      <TransitionGroup>
        {(props.grade === null || props.grade === 0) && (
          <Collapse
            key={0}
            orientation={"horizontal"}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          >
            <ButtonThumb
              grade={0}
              isActive={isOpenMessage}
              isDisabled={props.grade !== null && props.grade !== 0}
              onClick={onClickFactory(0)}
            >
              {props.config.gradeOneMessage}
            </ButtonThumb>
          </Collapse>
        )}
        {props.grade === null && (
          <Collapse
            key={"-"}
            orientation={"horizontal"}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          >
            <div className={"w-4"} />
          </Collapse>
        )}
        {(props.grade === null || props.grade !== 0) && (
          <Collapse
            key={1}
            orientation={"horizontal"}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          >
            <ButtonThumb
              grade={1}
              isActive={isOpenMessage}
              isDisabled={props.grade !== null && props.grade !== 1}
              onClick={onClickFactory(1)}
            >
              {props.config.gradeTwoMessage}
            </ButtonThumb>
          </Collapse>
        )}
      </TransitionGroup>
      <TransitionOpacity in={isOpenMessage}>
        <div className={"grid content-center"}>
          <div className={"font-sans text-sm"}>
            {props.config.thanksMessage}
          </div>
        </div>
      </TransitionOpacity>
    </div>
  )
}
