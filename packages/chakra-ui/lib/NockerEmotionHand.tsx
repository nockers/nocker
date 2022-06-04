import { Box, Button } from "@chakra-ui/react"
import { WidgetConfig, WidgetTicket } from "@nocker/client"
import React, { FC } from "react"
import { WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: WidgetTicket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerEmotionHand: FC<Props> = (props) => {
  return (
    <Box>
      <Button>{"Hello"}</Button>
    </Box>
  )
}
