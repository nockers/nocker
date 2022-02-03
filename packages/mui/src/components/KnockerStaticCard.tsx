import SearchIcon from "@mui/icons-material/SearchRounded"
import { Box, Card, Divider, InputBase, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { VFC } from "react"
import { Knocker } from "../client"
import type { WidgetHelpTreeItem } from "../client/types/widgetHelpTreeItem"
import { KnockerFormTicket } from "./KnockerFormTicket"
import { KnockerFabTypeListHelps } from "./KnockerListHelps"

type Props = {
  projectId: string
  helpTreeItems: WidgetHelpTreeItem[]
}

export const KnockerStaticCard: VFC<Props> = (props) => {
  const onCreate = async (form: { text: string }) => {
    try {
      const knocker = new Knocker({
        projectId: props.projectId,
        environment: "PRODUCTION",
        baseURL: "/api",
      })

      await knocker.tickets().create({ text: form.text })
    } catch (error) {
      captureException(error)
    }
  }

  const hasHelps = 0 < props.helpTreeItems.length

  return (
    <Card sx={{ width: (theme) => theme.spacing(40) }}>
      <Stack sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}>
        <KnockerFormTicket onCreate={onCreate} />
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
