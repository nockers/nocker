import { WidgetEmotion, WidgetTicket } from "@knockr/client"
import { Box, Grow } from "@mui/material"
import React, { useState, VFC } from "react"
import { KnockrFloatingCard } from "./KnockrFloatingCard"
import { KnockrFloatingTrigger } from "./KnockrFloatingTrigger"

type Props = {
  path?: string
  hasHelps: boolean
  hasEmotion: boolean
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
}

export const KnockrFab: VFC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
    props.onClose?.()
  }

  const onOpen = () => {
    setOpen(true)
    props.onOpen?.()
  }

  return (
    <Box>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockrFloatingCard
            path={props.path}
            hasHelps={props.hasHelps}
            hasEmotion={props.hasEmotion}
            onClose={onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockrFloatingTrigger onOpen={onOpen} />
        </Box>
      </Grow>
    </Box>
  )
}
