import { WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/hub"
import { useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { WidgetTicketSubmit } from "../types"
import { useClient } from "./useClient"

type Props = {
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: WidgetTicket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const useMutationTicket = (props: Props) => {
  const config = useContext(ConfigContext)

  const client = useClient()

  const [formText, setFormText] = useState("")

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const onChangeFormText = (text: string) => {
    setFormText(text)
  }

  const onResetForm = () => {
    setFormText("")
    markAsDone(false)
    props.onDone?.()
  }

  const onCreateTicket = async () => {
    if (config.isLoggingIn) return
    setLoading(true)
    if (client !== null) {
      const ticket = await client.tickets().create({
        type: null,
        text: formText,
        imageText: null,
        emotionId: null,
        pagePath: props.pagePath || window.location.pathname,
      })
      if (ticket instanceof Error) {
        captureException(ticket)
        props.onError?.(ticket)
        setLoading(false)
        return
      }
      markAsDone(true)
      props.onSubmitted?.(ticket)
    }
    if (client === null) {
      const ticket: WidgetTicketSubmit = {
        type: null,
        text: formText,
        imageText: null,
        pagePath: props.pagePath || window.location.pathname,
        pageTitle: window.document.title,
        emotionGrade: null,
        emotionType: null,
      }
      await new Promise((resolve) => setTimeout(resolve, 500))
      markAsDone(true)
      props.onSubmit?.(ticket)
    }
    setLoading(false)
  }

  return {
    formText,
    isLoading,
    isDone,
    onCreateTicket,
    onChangeFormText,
    onResetForm,
  }
}
