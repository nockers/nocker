import { WidgetHelp } from "@knockr/client"
import SearchIcon from "@mui/icons-material/SearchRounded"
import { Box, Divider, InputBase, Paper, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import React, { useState, VFC } from "react"
import { useClient } from "../hooks"
import { KnockrCapure } from "./KnockrCapure"
import { KnockrFormTicket } from "./KnockrFormTicket"
import { KnockrListHelps } from "./KnockrListHelps"

type Props = {
  helps: WidgetHelp[]
}

export const KnockrStaticCard: VFC<Props> = (props) => {
  const client = useClient()

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const onCreate = async () => {
    try {
      await client.tickets().create({
        type: null,
        text: formText,
        imageText: null,
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

  const hasHelps = 0 < props.helps.length

  return (
    <>
      <Paper sx={{ width: (theme) => theme.spacing(40) }}>
        <Stack sx={{ height: hasHelps ? "24rem" : "auto", overflowY: "auto" }}>
          <KnockrFormTicket
            onChangeText={onChangeText}
            onOpenCapture={onOpenCapture}
            onSubmit={onCreate}
            text={formText}
          />
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
              <KnockrListHelps helps={props.helps} />
            </Stack>
          )}
        </Stack>
      </Paper>
      {isOpenCapture && (
        <KnockrCapure onCapture={onCapture} onCancel={onCancelCapture} />
      )}
    </>
  )
}
