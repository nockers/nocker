import {
  Config,
  WidgetConfig,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetLogin,
} from "@nocker/client"
import { captureException } from "@sentry/hub"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { ConfigContext } from "./contexts"
import { useClient } from "./hooks"

type Props = {
  data?: WidgetLogin | null
  config?: Config
  widgetConfig?: WidgetConfig | null
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

  const widgetConfig: WidgetConfig =
    props.widgetConfig ?? data?.widgetConfig ?? widgetConfigDefault

  const value = {
    isLoggingIn,
    projectId: props.config?.projectId ?? "xxxxxxxxxxxxxxxxxxxxx",
    environment: props.config?.environment ?? "PRODUCTION",
    baseURL: props.config?.baseURL ?? "https://nocker.app/api",
    customer: data?.customer ?? customerPlaceholder,
    helps: data?.helps ?? [],
    widgetConfig: widgetConfig,
  }

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
