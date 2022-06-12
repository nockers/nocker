import { Box, Button, HStack } from "@chakra-ui/react"
import { WidgetConfig, Ticket } from "@nocker/client"
import { WidgetTicketSubmit } from "@nocker/react"
import React, { FC } from "react"
import { BiDislike } from "react-icons/bi"
import { BiLike } from "react-icons/bi"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetEmotionHand: FC<Props> = (props) => {
  return (
    <Box bg="white" w="100%" p={4} color="gray">
      このページは役に立ちましたか？
      <HStack>
        <Button>
          <BiDislike />
          良くない
          <BiLike />
          良い
        </Button>
      </HStack>
    </Box>
  )
}
