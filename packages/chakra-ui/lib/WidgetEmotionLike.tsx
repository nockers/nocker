import { Box, Button, Text } from "@chakra-ui/react"
import { WidgetConfig, Ticket } from "@nocker/client"
import { WidgetTicketSubmit } from "@nocker/react"
import React, { FC } from "react"
import { AiFillHeart } from "react-icons/ai"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetEmotionLike: FC<Props> = (props) => {
  return (
    <Box>
      <Button>
        <AiFillHeart />
        {"いいね"}
        <Text paddingLeft={2}>{"20"}</Text>
      </Button>
    </Box>
  )
}
