import type { EmotionGrade } from "@nocker/client"
import React, { FC, useEffect, useState } from "react"
import { useEmotionText } from "../../hooks"
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
