import { Box, Card } from "@mui/material"
import { WidgetConfig, WidgetEmotion } from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useContext, useState } from "react"
import { WidgetContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { NockerFormEmotionOne } from "./NockerFormEmotionOne"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasBorder?: boolean | null
  onSubmitted?(emotion: WidgetEmotion): void
  onError?(error: Error): void
}

export const NockerEmotionLike: FC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [isActive, markAsActive] = useState(false)

  const onSubmit = async () => {
    markAsActive(isActive)
    const emotion = await client.emotions().create({
      pagePath: props.pagePath || window.location.pathname,
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

  if (widget.isLoading) {
    return null
  }

  return (
    <Card
      sx={{
        display: "flex",
        width: "fit-content",
        borderWidth: hasBorder ? 1 : 0,
      }}
    >
      <Box sx={{ py: 0, px: 0 }}>
        <NockerFormEmotionOne
          config={{
            buttonText: widgetConfig.emotionOneButtonText,
          }}
          isActive={isActive}
          onClick={() => {
            onSubmit()
          }}
        />
      </Box>
    </Card>
  )
}
