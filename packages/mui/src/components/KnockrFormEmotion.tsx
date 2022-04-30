import { WidgetGrade } from "@knockr/client"
import { Box, Collapse, Fade, Stack, Typography } from "@mui/material"
import React, { useEffect, useState, VFC } from "react"
import { TransitionGroup } from "react-transition-group"
import { ButtonEmotion } from "./button/ButtonEmotion"

type Props = {
  grade: WidgetGrade | null
  textMessage: string
  onSelect(grade: WidgetGrade): void
}

export const KnockrFormEmotion: VFC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  useEffect(() => {
    if (props.grade === null) {
      openMessage(false)
      return
    }
    const id = setTimeout(() => {
      openMessage(true)
    }, 400)
    return () => {
      clearTimeout(id)
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
          <Typography>{props.textMessage}</Typography>
        </Fade>
      )}
    </Stack>
  )
}
