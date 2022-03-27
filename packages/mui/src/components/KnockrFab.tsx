import { Box, Grow } from "@mui/material"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { KnockrFloatingCard } from "./KnockrFloatingCard"
import { KnockrFloatingTrigger } from "./KnockrFloatingTrigger"

export const KnockrFab: VFC = () => {
  const [isOpen, setOpen] = useState(false)

  const widget = useContext(WidgetContext)

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  return (
    <Box>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockrFloatingCard onClose={onClose} helps={widget.helps} />
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
