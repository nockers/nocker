import SearchIcon from "@mui/icons-material/SearchRounded"
import { Box, Card, Divider, InputBase, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { VFC } from "react"
import { useClient } from "../hooks"
import type { WidgetHelpTreeItem } from "../types"
import { KnockrFloatingCardHeader } from "./KnockrFloatingCardHeader"
import { KnockrFormTicket } from "./KnockrFormTicket"
import { KnockrFabTypeListHelps } from "./KnockrListHelps"

type Props = {
  onClose(): void
  helpTreeItems: WidgetHelpTreeItem[]
}

type Form = {
  text: string
}

export const KnockrFloatingCard: VFC<Props> = (props) => {
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
      <KnockrFloatingCardHeader onClose={props.onClose} />
      <Stack sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}>
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
          <KnockrFormTicket onCreate={onCreate} />
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
            <KnockrFabTypeListHelps helpTreeItems={props.helpTreeItems} />
          </Stack>
        )}
      </Stack>
    </Card>
  )
}
