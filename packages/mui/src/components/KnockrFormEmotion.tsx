import { WidgetGrade } from "@knockr/client"
import { Collapse, Fade, Stack, Typography } from "@mui/material"
import React, { useEffect, useState, VFC } from "react"
import { TransitionGroup } from "react-transition-group"
import { KnockrIconButtonEmotion } from "./KnockrIconButtonEmotion"

type Props = {
  emotionGrade: WidgetGrade | null
  textMessage: string
  onSelect(grade: WidgetGrade): void
}

export const KnockrFormEmotion: VFC<Props> = (props) => {
  const [isOpenMessage, openMessage] = useState(false)

  useEffect(() => {
    if (props.emotionGrade === null) return
    const id = setTimeout(() => {
      openMessage(true)
    }, 400)
    return () => {
      clearTimeout(id)
    }
  }, [props.emotionGrade])

  const grades: WidgetGrade[] =
    props.emotionGrade !== null ? [props.emotionGrade] : [0, 1, 2, 3, 4]

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
              mr: 1,
              height: "2.5rem",
              overflow: "hidden",
            }}
          >
            <KnockrIconButtonEmotion
              grade={grade}
              isActive={isOpenMessage}
              onClick={() => {
                props.onSelect(grade)
              }}
            />
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
