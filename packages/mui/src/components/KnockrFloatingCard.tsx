import SearchIcon from "@mui/icons-material/SearchRounded"
import { Box, Card, Divider, InputBase, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"
import { useClient } from "../hooks"
import type { WidgetHelpTreeItem } from "../types"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFloatingCardHeader } from "./KnockrFloatingCardHeader"
import { KnockrFormTicket } from "./KnockrFormTicket"
import { KnockrFabTypeListHelps } from "./KnockrListHelps"

type Props = {
  onClose(): void
  helpTreeItems: WidgetHelpTreeItem[]
}

export const KnockrFloatingCard: VFC<Props> = (props) => {
  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const onCreate = async () => {
    try {
      await client.tickets().create({
        type: null,
        text: formText,
        imageText: formImageText,
      })
      setFormText("")
      setFormImageText(null)
    } catch (error) {
      captureException(error)
    }
  }

  const onChangeText = (text: string) => {
    setFormText(text)
  }

  const onOpenCapture = async () => {
    openCapture(true)
  }

  const onCapture = (imageText: string) => {
    setFormImageText(imageText)
    openCapture(false)
  }

  const onCancelCapture = () => {
    openCapture(false)
  }

  const hasHelps = 0 < props.helpTreeItems.length

  return (
    <>
      {!isOpenCapture && (
        <Card sx={{ width: (theme) => theme.spacing(40) }}>
          <KnockrFloatingCardHeader onClose={props.onClose} />
          <Stack
            sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}
          >
            <Box sx={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
              <KnockrFormTicket
                onChangeText={onChangeText}
                onOpenCapture={onOpenCapture}
                onSubmit={onCreate}
                text={formText}
              />
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
                  <InputBase
                    sx={{ flex: 1 }}
                    placeholder={"何かお困りですか？"}
                  />
                </Stack>
                <KnockrFabTypeListHelps helpTreeItems={props.helpTreeItems} />
              </Stack>
            )}
          </Stack>
        </Card>
      )}
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
