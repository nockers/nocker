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

  const [text, setText] = useState("")

  const [isDone, markAsDone] = useState(false)

  const [isLoading, setLoading] = useState(false)

  const updateText = (text: string) => {
    setText(text)
  }

  const reset = () => {
    setText("")
    markAsDone(false)
    props.onDone?.()
  }

  const createTicket = async () => {
    try {
      setLoading(true)
      if (config.client !== null) {
        const isLoggedIn = await config.client.isLoggedIn()
        if (isLoggedIn) {
          const login = await config.client.login()
          config.setCustomer(login?.customer)
          config.setHelps(login?.helps)
          config.setWidgetConfig(login?.widgetConfig)
        }
        const emotionId = props.emotionId?.()
        const ticket = await config.client.tickets().create({
          type: null,
          pagePath: props.pagePath || window.location.pathname,
          pageTitle: window.document.title,
          text: text,
          imageText: null,
          emotionId,
        })
        markAsDone(true)
        setTicketId(ticket.id)
        props.onSubmitted?.(ticket)
        setLoading(false)
      }
      if (config.client === null) {
        const ticket: WidgetTicketSubmit = {
          type: null,
          pagePath: props.pagePath || window.location.pathname,
          pageTitle: window.document.title,
          text: text,
          imageText: null,
          emotionGrade: null,
          emotionType: null,
        }
        await new Promise((resolve) => setTimeout(resolve, 500))
        markAsDone(true)
        props.onSubmit?.(ticket)
        setLoading(false)
      }
    } catch (error) {
      captureException(error)
      setLoading(false)
      if (error instanceof Error) {
        props.onError?.(error)
      }
    }
  }

  return {
    ticketId,
    text,
    isLoading,
    isDone,
    createTicket,
    updateText,
    reset,
  }
}
