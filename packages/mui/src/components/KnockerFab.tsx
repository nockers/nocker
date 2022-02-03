import { Box, Grow } from "@mui/material"
import React, { useContext, useState, VFC } from "react"
import { WidgetContext } from "../contexts"
import { KnockerFloatingCard } from "./KnockerFloatingCard"
import { KnockerFloatingTrigger } from "./KnockerFloatingTrigger"

export const KnockerFab: VFC = () => {
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
          <KnockerFloatingCard
            onClose={onClose}
            helpTreeItems={widget.helpTreeItems}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockerFloatingTrigger onOpen={onOpen} />
        </Box>
      </Grow>
    </Box>
  )
}
