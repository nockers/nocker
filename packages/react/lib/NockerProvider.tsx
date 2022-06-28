import {
  type Customer,
  type Help,
  type Nocker,
  type WidgetConfig,
  widgetConfigDefault,
} from "@nocker/client"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { ConfigContext } from "./contexts"

type Props = {
  children: ReactNode
  widgetConfig?: Partial<WidgetConfig> | null
  client?: Nocker | null
  customer?: Customer
  helps?: Help[]
}

let __IS_INITIALIZED__ = false

export const NockerProvider: FC<Props> = (props) => {
  const client = props.client ?? null

  const [widgetConfig, setWidgetConfig] = useState<WidgetConfig | null>(null)

  const [customer, setCustomer] = useState<Customer | null>(() => {
    return props.customer ?? null
  })

  const [helps, setHelps] = useState<Help[]>(() => {
    return props.helps ?? []
  })

  const [isLoggingIn, setLoggingIn] = useState(() => {
    return !__IS_INITIALIZED__
  })

  useEffect(() => {
    if (__IS_INITIALIZED__) return
    setLoggingIn(true)
    const boot = client?.boot()
    boot?.then((login) => {
      if (login === null) return
      setWidgetConfig(login.widgetConfig)
      setCustomer(login.customer)
      setHelps(login.helps)
      setLoggingIn(false)
    })
    boot?.finally(() => {
      setLoggingIn(false)
    })
    __IS_INITIALIZED__ = true
  }, [])

  const widgetConfigOverride = props.widgetConfig ?? {}

  const widgetConfigMerged: WidgetConfig = {
    ...widgetConfigDefault,
    ...widgetConfig,
    ...widgetConfigOverride,
  }

  const value = {
    isLoggingIn,
    client,
    widgetConfig: widgetConfigMerged,
    customer,
    helps,
    setWidgetConfig(widgetConfig?: WidgetConfig) {
      setWidgetConfig(widgetConfig ?? null)
    },
    setCustomer(customer?: Customer) {
      setCustomer(customer ?? null)
    },
    setHelps(helps?: Help[]) {
      setHelps(helps ?? [])
    },
  }

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
