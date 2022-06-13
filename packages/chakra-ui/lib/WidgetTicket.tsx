import { Button, Stack, Textarea } from "@chakra-ui/react"
import { WidgetConfig, Ticket } from "@nocker/client"
import { WidgetTicketSubmit } from "@nocker/react"
import React, { FC } from "react"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetTicket: FC<Props> = (props) => {
  return (
    <Stack>
      <Textarea
        bg={"white"}
        color={"black"}
        placeholder="製品の改善についてご意見・ご要望をお聞かせください。"
      ></Textarea>
      <Button>{"送信"}</Button>
    </Stack>
  )
}
