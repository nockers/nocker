import SearchIcon from "@mui/icons-material/SearchRounded"
import { Box, Card, Divider, InputBase, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { VFC } from "react"
import { useClient } from "../hooks"
import type { WidgetHelpTreeItem } from "../types"
import { KnockerFloatingCardHeader } from "./KnockerFloatingCardHeader"
import { KnockerFormTicket } from "./KnockerFormTicket"
import { KnockerFabTypeListHelps } from "./KnockerListHelps"

type Props = {
  onClose(): void
  helpTreeItems: WidgetHelpTreeItem[]
}

type Form = {
  text: string
}

export const KnockerFloatingCard: VFC<Props> = (props) => {
  const client = useClient()

  const onCreate = async (form: Form) => {
    try {
      await client.tickets().create({ text: form.text })
    } catch (error) {
      captureException(error)
    }
  }

  const hasHelps = 0 < props.helpTreeItems.length

  return (
    <Card sx={{ width: (theme) => theme.spacing(40) }}>
      <KnockerFloatingCardHeader onClose={props.onClose} />
      <Stack sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}>
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
          <KnockerFormTicket onCreate={onCreate} />
        </Box>
        {hasHelps && <Divider />}
        {hasHelps && (
          <Stack>
            <Box sx={{ p: 1 }}></Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              sx={{ px: 2 }}
            >
              <SearchIcon fontSize={"small"} />
              <InputBase sx={{ flex: 1 }} placeholder={"何かお困りですか？"} />
            </Stack>
            <KnockerFabTypeListHelps helpTreeItems={props.helpTreeItems} />
          </Stack>
        )}
      </Stack>
    </Card>
  )
}
