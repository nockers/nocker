import { Box, Button, Text } from "@chakra-ui/react"
import FavoriteIcon from "@mui/icons-material/Favorite"
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

export const NockerEmotionLike: FC<Props> = (props) => {
  return (
    <Box>
      <Button>
        <FavoriteIcon />
        {"いいね"}
        <Text paddingLeft={2}>{"20"}</Text>
      </Button>
    </Box>
  )
}
