import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@knockr/client"
import { Box, Grow } from "@mui/material"
import React, { FC, useContext, useState } from "react"
import { WidgetContext } from "../contexts"
import { useWidgetConfig } from "../hooks"
import { ButtonTrigger } from "./button/ButtonTrigger"
import { KnockrCard } from "./KnockrCard"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
  onDone?(): void
}

export const KnockrFab: FC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const [isOpen, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
    props.onClose?.()
  }

  const onOpen = () => {
    setOpen(true)
    props.onOpen?.()
  }

  const onDone = () => {
    setOpen(false)
    props.onDone?.()
  }

  if (widget.isLoading) {
    return null
  }

  return (
    <>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockrCard
            widgetConfig={props.widgetConfig}
            pagePath={props.pagePath}
            isNotEmbedded={true}
            hasHelps={false}
            onClose={onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
            onDone={onDone}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <ButtonTrigger
            config={{
              text: widgetConfig.fabText,
            }}
            onOpen={onOpen}
          />
        </Box>
      </Grow>
    </>
  )
}
