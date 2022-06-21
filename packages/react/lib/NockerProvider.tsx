import {
  type Nocker,
  type Login,
  type WidgetConfig,
  widgetConfigDefault,
} from "@nocker/client"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { ConfigContext } from "./contexts"

type Props = {
  data?: Login | null
  widgetConfig?: Partial<WidgetConfig> | null
  children: ReactNode
  client?: Nocker | null
}

let __LOGIN__: Login | null = null

export const NockerProvider: FC<Props> = (props) => {
  const client = props.client ?? null

  const [data, setData] = useState<Login | Error | null>(() => {
    if (__LOGIN__) {
      return __LOGIN__
    }
    return props.data ?? null
  })

  const [isLoggingIn, setLoading] = useState(() => {
    if (__LOGIN__ !== null || data !== null) {
      return false
    }
    return client !== null
  })

  useEffect(() => {
    if (!isLoggingIn) return
    client?.login().then((data) => {
      setData(data)
      setLoading(false)
      if (data instanceof Error) return
      __LOGIN__ = data
    })
  }, [])

  const isError = data instanceof Error

  const login = isError ? null : data

  const widgetConfigOverride = props.widgetConfig ?? {}

  const widgetConfigRemote = isError ? {} : data?.widgetConfig ?? {}

  const widgetConfig: WidgetConfig = {
    ...widgetConfigDefault,
    ...widgetConfigRemote,
    ...widgetConfigOverride,
  }

  const value = {
    isError,
    isLoggingIn,
    client,
    widgetConfig,
    customer: login?.customer ?? null,
    helps: login?.helps ?? [],
  }

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
