import { Box, Card } from "@mui/material"
import { WidgetConfig, WidgetEmotion } from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { WidgetEmotionSubmit } from "../types"
import { NockerFormEmotionOne } from "./box/BoxFormEmotionOne"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  hasBorder?: boolean | null
  onSubmitted?(emotion: WidgetEmotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const NockerEmotionLike: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [isActive, markAsActive] = useState(false)

  const onSubmit = async () => {
    if (config.isLoggingIn) return
    markAsActive(isActive)
    if (client !== null) {
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
    if (client === null) {
      const emotion: WidgetEmotionSubmit = {
        type: "ONE",
        grade: 1,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
      }
      props.onSubmit?.(emotion)
    }
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
