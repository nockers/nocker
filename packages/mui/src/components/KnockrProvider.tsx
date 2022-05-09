import {
  Config,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetLogin,
} from "@knockr/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useEffect, useState } from "react"
import { ConfigContext, WidgetContext } from "../contexts"
import { useClient } from "../hooks"

type Props = {
  config: Config
}

export const KnockrProvider: FC<Props> = (props) => {
  const client = useClient(props.config)

  const [data, setData] = useState<WidgetLogin | Error | null>(null)

  useEffect(() => {
    client
      .login()
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        captureException(error)
      })
  }, [])

  const isLoading = data === null

  if (data instanceof Error) {
    return null
  }

  const customerPlaceholder: WidgetCustomer = {
    id: "xxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "DEVELOPMENT",
    userId: null,
    name: null,
  }

  const value = {
    isLoading,
    projectId: data?.projectId ?? "xxxxxxxxxxxxxxxxxxxxx",
    widgetConfig: data?.widgetConfig ?? widgetConfigDefault,
    customer: data?.customer ?? customerPlaceholder,
    helps: data?.helps ?? [],
  }

  return (
    <ConfigContext.Provider value={props.config}>
      <WidgetContext.Provider value={value}>
        {props.children}
      </WidgetContext.Provider>
    </ConfigContext.Provider>
  )
}
