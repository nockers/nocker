import { Collapse } from "@mui/material"
import type { EmotionGrade } from "@nocker/client"
import React, { FC, useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"
import { useEmotionText } from "../../hooks"
import { ButtonEmotion } from "../button/ButtonEmotion"
import { TransitionOpacity } from "../transition/TransitionOpacity"

type Props = {
  config: {
    gradeFiveMessage: string
    gradeFourMessage: string
    gradeThreeMessage: string
    gradeTwoMessage: string
    gradeOneMessage: string
  }
  grade: EmotionGrade | null
  onSelect(grade: EmotionGrade): void
}

export const DivEmotion: FC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  const emotionText = useEmotionText(props.config, props.grade)

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

  const grades: EmotionGrade[] =
    props.grade !== null ? [props.grade] : [0, 1, 2, 3, 4]

  return (
    <div className={"grid grid-flow-col justify-start"}>
      <TransitionGroup>
        {grades.map((grade) => (
          <Collapse
            key={grade}
            orientation={"horizontal"}
            sx={{
              display: "inline-block",
              verticalAlign: "top",
              height: "2.5rem",
              overflow: "hidden",
            }}
          >
            <ButtonEmotion
              grade={grade}
              isActive={isOpenMessage}
              onClick={() => {
                props.onSelect(grade)
              }}
            />
            <div className={"inline-block w-2"} />
          </Collapse>
        ))}
      </TransitionGroup>
      <TransitionOpacity in={isOpenMessage}>
        <div className={"grid content-center"}>
          <div className={"font-sans text-sm dark:text-gray-200"}>
            {emotionText}
          </div>
        </div>
      </TransitionOpacity>
    </div>
  )
}
