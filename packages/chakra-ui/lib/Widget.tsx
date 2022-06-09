import { Box, Button } from "@chakra-ui/react"
import { WidgetConfig, Ticket } from "@nocker/client"
import { WidgetTicketSubmit } from "@nocker/react"
import React, { FC } from "react"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const Widget: FC<Props> = (props) => {
  return (
    <Box>
      <Button>{"Hello"}</Button>
    </Box>
  )
}
