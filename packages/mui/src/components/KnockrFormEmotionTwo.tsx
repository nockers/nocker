import { WidgetGrade } from "@knockr/client"
import { Box, Collapse, Fade, Stack, Typography } from "@mui/material"
import React, { useEffect, useState, VFC } from "react"
import { TransitionGroup } from "react-transition-group"
import { ButtonThumb } from "./button/ButtonThumb"

type Props = {
  grade: WidgetGrade | null
  textMessage: string
  onSelect(grade: WidgetGrade): void
}

export const KnockrFormEmotionTwo: VFC<Props> = (props) => {
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

  const onClickFactory = (grade: WidgetGrade) => {
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
            sx={{
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <ButtonThumb
              grade={0}
              isActive={isOpenMessage}
              isDisabled={props.grade !== null && props.grade !== 0}
              onClick={onClickFactory(0)}
            >
              {"いいえ"}
            </ButtonThumb>
          </Collapse>
        )}
        {props.grade === null && (
          <Collapse
            key={"-"}
            orientation={"horizontal"}
            sx={{
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <Box sx={{ width: "1rem" }} />
          </Collapse>
        )}
        {(props.grade === null || props.grade !== 0) && (
          <Collapse
            key={1}
            orientation={"horizontal"}
            sx={{
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <ButtonThumb
              grade={1}
              isActive={isOpenMessage}
              isDisabled={props.grade !== null && props.grade !== 1}
              onClick={onClickFactory(1)}
            >
              {"はい"}
            </ButtonThumb>
          </Collapse>
        )}
      </TransitionGroup>
      {isOpenMessage && (
        <Fade in={isOpenMessage}>
          <Typography>{props.textMessage}</Typography>
        </Fade>
      )}
    </Stack>
  )
}
