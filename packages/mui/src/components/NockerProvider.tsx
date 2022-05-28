import {
  Config,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetLogin,
} from "@nocker/client"
import { captureException } from "@sentry/minimal"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { ConfigContext } from "../contexts"
import { useClient } from "../hooks"

type Props = {
  data?: WidgetLogin | null
  config: Config
  children: ReactNode
}

export const NockerProvider: FC<Props> = (props) => {
  const client = useClient(props.config)

  const [isLoggingIn, setLoading] = useState(client !== null)

  const [data, setData] = useState<WidgetLogin | Error | null>(() => {
    return props.data ?? null
  })

  useEffect(() => {
    if (typeof props.data !== "undefined" && props.data !== null) {
      setLoading(false)
      return
    }
    if (client === null) {
      setLoading(false)
      return
    }
    client
      .login()
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        captureException(error)
      })
  }, [])

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
    isLoggingIn,
    projectId: props.config.projectId ?? "xxxxxxxxxxxxxxxxxxxxx",
    environment: props.config.environment ?? "PRODUCTION",
    baseURL: props.config.baseURL ?? "https://nocker.app/api",
    widgetConfig: data?.widgetConfig ?? widgetConfigDefault,
    customer: data?.customer ?? customerPlaceholder,
    helps: data?.helps ?? [],
  }

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
