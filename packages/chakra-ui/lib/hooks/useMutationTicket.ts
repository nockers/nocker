import type { Ticket } from "@nocker/client"
import { captureException } from "@sentry/hub"
import { useContext, useState } from "react"
import { ConfigContext } from "../contexts"
import { WidgetTicketSubmit } from "../types"

type Props = {
  pagePath?: string | null
  pageTitle?: string | null
  onSubmitted?(data: Ticket): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
  emotionId?(): string | null
}

export const useMutationTicket = (props: Props) => {
  const config = useContext(ConfigContext)

  const [ticketId, setTicketId] = useState<string | null>(null)

  const [formText, setFormText] = useState("")

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const changeFormText = (text: string) => {
    setFormText(text)
  }

  const reset = () => {
    setFormText("")
    markAsDone(false)
    props.onDone?.()
  }

  const createTicket = async () => {
    if (config.isLoggingIn) return
    setLoading(true)
    if (config.client !== null) {
      const emotionId = props.emotionId?.()
      const ticket = await config.client.tickets().create({
        type: null,
        text: formText,
        imageText: null,
        emotionId,
        pagePath: props.pagePath || window.location.pathname,
      })
      if (ticket instanceof Error) {
        captureException(ticket)
        props.onError?.(ticket)
        setLoading(false)
        return
      }
      markAsDone(true)
      setTicketId(ticket.id)
      props.onSubmitted?.(ticket)
      setLoading(false)
      return
    }
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
    setLoading(false)
  }

  return {
    ticketId,
    formText,
    isLoading,
    isDone,
    createTicket,
    changeFormText,
    reset,
  }
}
