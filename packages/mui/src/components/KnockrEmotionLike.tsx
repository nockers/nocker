import { WidgetEmotion } from "@knockr/client"
import { Box, Card } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"
import { useClient } from "../hooks"
import { KnockrFormEmotionOne } from "./KnockrFormEmotionOne"

type Props = {
  pagePath?: string
  pageTitle?: string
  textQuestion?: string | null
  textThanks?: string | null
  hasBorder?: boolean | null
  onSubmitted?(emotion: WidgetEmotion): void
  onError?(error: Error): void
}

export const KnockrEmotionLike: VFC<Props> = (props) => {
  const client = useClient()

  const [isActive, markAsActive] = useState(false)

  const onSubmit = async () => {
    markAsActive(isActive)
    const emotion = await client.emotions().create({
      pagePath: props.pagePath ?? window.location.pathname,
      type: "ONE",
      grade: 1,
      ticketId: null,
    })
    if (emotion instanceof Error) {
      captureException(emotion)
      props.onError?.(emotion)
      return
    }
    props.onSubmitted?.(emotion)
  }

  const hasBorder = props.hasBorder ?? true

  return (
    <Card
      sx={{
        display: "flex",
        width: "fit-content",
        borderWidth: hasBorder ? 1 : 0,
      }}
    >
      <Box sx={{ py: 0, px: 0 }}>
        <KnockrFormEmotionOne
          isActive={isActive}
          onClick={() => {
            onSubmit()
          }}
        />
      </Box>
    </Card>
  )
}
