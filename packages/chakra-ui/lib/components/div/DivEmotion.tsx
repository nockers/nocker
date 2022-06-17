import { Collapse } from "@mui/material"
import type { EmotionGrade } from "@nocker/client"
import React, { FC, useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"
import { useEmotionText } from "../../hooks"
import { ButtonEmotion } from "../button/ButtonEmotion"

type Props = {
  config: {
    gradeFiveMessage: string
    gradeFourMessage: string
    gradeThreeMessage: string
    gradeTwoMessage: string
    gradeOneMessage: string
  }
  grade: EmotionGrade | null
  isDisabled: boolean
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
    <div className={"grid h-10 grid-flow-col justify-start overflow-hidden"}>
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
              isDisabled={props.isDisabled}
              onClick={() => {
                props.onSelect(grade)
              }}
            />
            <div className={"inline-block w-2"} />
          </Collapse>
        ))}
      </TransitionGroup>
    </div>
  )
}
