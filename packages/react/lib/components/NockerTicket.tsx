import { WidgetConfig, WidgetTicket } from "@nocker/client"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { WidgetTicketSubmit } from "../types"
import { BoxFormTicket } from "./box/BoxFormTicket"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: WidgetTicket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerTicket: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const client = useClient()

  const [formText, setFormText] = useState("")

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onCreateTicket = async () => {}

  const onChangeText = (text: string) => {
    setFormText(text)
  }

  const onReset = () => {
    setFormText("")
    markAsDone(false)
    props.onDone?.()
  }

  return (
    <div className={"w-100 max-w-64 overflow-hidden rounded-md bg-white"}>
      <div className={"pl-4 pr-4 pt-4 pb-4"}>
        <BoxFormTicket
          config={{
            buttonSubmitText: widgetConfig.ticketButtonSubmitText,
            inputPlaceholder: widgetConfig.ticketInputPlaceholder,
          }}
          text={formText}
          isLoading={isLoading}
          onChangeText={onChangeText}
          onSubmit={onCreateTicket}
        />
      </div>
    </div>
  )
}
