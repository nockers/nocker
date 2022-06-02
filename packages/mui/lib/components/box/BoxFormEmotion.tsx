import { Box, Collapse, Fade, Stack, Typography } from "@mui/material"
import { WidgetGrade } from "@nocker/client"
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
  grade: WidgetGrade | null
  onSelect(grade: WidgetGrade): void
}

export const BoxFormEmotion: FC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  const emotionText = useEmotionText(props.config, props.grade)

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

  const grades: WidgetGrade[] =
    props.grade !== null ? [props.grade] : [0, 1, 2, 3, 4]

  return (
    <Stack direction={"row"} alignItems={"center"}>
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
            <Box sx={{ display: "inline-block", width: "0.5rem" }} />
          </Collapse>
        ))}
      </TransitionGroup>
      {isOpenMessage && (
        <Fade in={isOpenMessage}>
          <Typography>{emotionText}</Typography>
        </Fade>
      )}
    </Stack>
  )
}
