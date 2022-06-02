import { WidgetConfig, WidgetTicket } from "@nocker/client"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient, useWidgetConfig } from "../hooks"
import { WidgetTicketSubmit } from "../types"
import { NockerFormTicket } from "./NockerFormTicket"

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

  const [isOpenCapture, openCapture] = useState(false)

  const [formText, setFormText] = useState("")

  const [formImageText, setFormImageText] = useState<string | null>(null)

  const [isOpenHelpForm, openHelpForm] = useState(false)

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onCreateTicket = async () => {}

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

  const onReset = () => {
    setFormText("")
    setFormImageText(null)
    markAsDone(false)
    props.onDone?.()
  }

  return (
    <div className={"w-100 max-w-64 overflow-hidden rounded-md bg-white"}>
      <div className={"pl-4 pr-4 pt-4 pb-4"}>
        <NockerFormTicket
          config={{
            buttonSubmitText: widgetConfig.ticketButtonSubmitText,
            inputPlaceholder: widgetConfig.ticketInputPlaceholder,
          }}
          text={formText}
          hasImage={formImageText !== null}
          isLoading={isLoading}
          onChangeText={onChangeText}
          onOpenCapture={onOpenCapture}
          onSubmit={onCreateTicket}
        />
      </div>
    </div>
  )
}
