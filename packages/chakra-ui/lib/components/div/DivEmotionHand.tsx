import { Fade, HStack } from "@chakra-ui/react"
import type { EmotionGrade } from "@nocker/client"
import React, { FC, useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"
import { ButtonThumb } from "../button/ButtonThumb"

type Props = {
  config: {
    gradeOneMessage: string
    gradeTwoMessage: string
    thanksMessage: string
  }
  grade: EmotionGrade | null
  isDisabled: boolean
  onSelect(grade: EmotionGrade): void
}

export const DivEmotionHand: FC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  const isDisabled =
    props.isDisabled || (props.grade !== null && props.grade !== 0)

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
          <HStack
            key={0}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          >
            <ButtonThumb
              grade={0}
              isActive={isOpenMessage}
              isDisabled={isDisabled}
              onClick={onClickFactory(0)}
            >
              {props.config.gradeOneMessage}
            </ButtonThumb>
          </HStack>
        )}
        {props.grade === null && (
          <HStack
            key={"-"}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          >
            <div className={"w-4"} />
          </HStack>
        )}
        {(props.grade === null || props.grade !== 0) && (
          <HStack
            key={1}
            sx={{ display: "inline-block", verticalAlign: "top" }}
            pl={4}
          >
            <ButtonThumb
              grade={1}
              isActive={isOpenMessage}
              isDisabled={props.grade !== null && props.grade !== 1}
              onClick={onClickFactory(1)}
            >
              {props.config.gradeTwoMessage}
            </ButtonThumb>
          </HStack>
        )}
      </TransitionGroup>
      <Fade in={isOpenMessage}>
        <div className={"grid content-center"}>
          <div className={"font-sans text-sm"}>
            {props.config.thanksMessage}
          </div>
        </div>
      </Fade>
    </div>
  )
}
