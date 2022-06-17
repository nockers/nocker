import {
  type Nocker,
  type Login,
  type WidgetConfig,
  type Customer,
  widgetConfigDefault,
} from "@nocker/client"
import { captureException } from "@sentry/hub"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { ConfigContext } from "./contexts"

type Props = {
  data?: Login | null
  widgetConfig?: Partial<WidgetConfig> | null
  children: ReactNode
  client?: Nocker | null
}

export const NockerProvider: FC<Props> = (props) => {
  const client = props.client ?? null

  const [data, setData] = useState<Login | Error | null>(() => {
    return props.data ?? null
  })

  const [isLoggingIn, setLoading] = useState(() => {
    return client !== null || data !== null
  })

  useEffect(() => {
    if (!isLoggingIn) return
    if (client === null) return
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

  const customerPlaceholder: Customer = {
    id: "xxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "DEVELOPMENT",
    userId: null,
    name: null,
  }

  const partialWidgetConfig = props.widgetConfig ?? {}

  const partialWidgetConfigRemote = data?.widgetConfig ?? {}

  const widgetConfig: WidgetConfig = {
    ...widgetConfigDefault,
    ...partialWidgetConfigRemote,
    ...partialWidgetConfig,
  }

  const value = {
    isLoggingIn,
    client: client,
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
