import { Box, Collapse, Fade, Stack, Typography } from "@mui/material"
import { EmotionGrade } from "@nocker/client"
import { useEmotionText } from "@nocker/react"
import React, { FC, useEffect, useState } from "react"
import { TransitionGroup } from "react-transition-group"
import { ButtonEmotion } from "../button/ButtonEmotion"

type Props = {
  gradeFiveMessage: string
  gradeFourMessage: string
  gradeThreeMessage: string
  gradeTwoMessage: string
  gradeOneMessage: string
  grade: EmotionGrade | null
  onSelect(grade: EmotionGrade): void
}

export const BoxEmotion: FC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  const emotionText = useEmotionText(
    {
      gradeFiveMessage: props.gradeFiveMessage,
      gradeFourMessage: props.gradeFourMessage,
      gradeThreeMessage: props.gradeThreeMessage,
      gradeTwoMessage: props.gradeTwoMessage,
      gradeOneMessage: props.gradeOneMessage,
    },
    props.grade,
  )

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

  const grades: EmotionGrade[] =
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
          <Typography sx={{ fontWeight: "bold" }}>{emotionText}</Typography>
        </Fade>
      )}
    </Stack>
  )
}
