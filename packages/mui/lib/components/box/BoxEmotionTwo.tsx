import { Box, Collapse, Fade, Stack, Typography } from "@mui/material"
import { EmotionGrade } from "@nocker/client"
import React, { FC, useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"
import { ButtonThumb } from "../button/ButtonThumb"

type Props = {
  gradeOneMessage: string
  gradeTwoMessage: string
  thanksMessage: string
  grade: EmotionGrade | null
  onSelect(grade: EmotionGrade): void
}

export const BoxEmotionTwo: FC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  useEffect(() => {
    if (props.grade === null) {
      openMessage(false)
      return
    }
    const timeout = setTimeout(() => {
      openMessage(true)
    }, 400)
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
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
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
              {props.gradeOneMessage}
            </ButtonThumb>
          </Collapse>
        )}
        {props.grade === null && (
          <Collapse
            key={"-"}
            orientation={"horizontal"}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          >
            <Box sx={{ width: "1rem" }} />
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
              {props.gradeTwoMessage}
            </ButtonThumb>
          </Collapse>
        )}
      </TransitionGroup>
      {isOpenMessage && (
        <Fade in={isOpenMessage}>
          <Typography>{props.thanksMessage}</Typography>
        </Fade>
      )}
    </Stack>
  )
}
