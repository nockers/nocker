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

  const [isLoggingIn, setLoggingIn] = useState(() => {
    return !__IS_INITIALIZED__
  })

  const [widgetConfig, setWidgetConfig] = useState<WidgetConfig | null>(() => {
    return null
  })

  const [customer, setCustomer] = useState<Customer | null>(() => {
    return props.customer ?? null
  })

  const [helps, setHelps] = useState<Help[]>(() => {
    return props.helps ?? []
  })

  useEffect(() => {
    if (__IS_INITIALIZED__) return
    setLoggingIn(true)
    const login = client?.init()
    login?.then((login) => {
      if (login === null) return
      setCustomer(login.customer)
      setLoggingIn(false)
    })
    login?.finally(() => {
      setLoggingIn(false)
    })
    const project = client?.project().read()
    project?.then((project) => {
      console.log(project)
      setWidgetConfig(project.widgetConfig)
      setHelps(project.helps)
    })
    __IS_INITIALIZED__ = true
  }, [])

  const widgetConfigMerged: WidgetConfig = {
    ...widgetConfigDefault,
    ...widgetConfig,
    ...props.widgetConfig,
  }

  const value = {
    isLoggingIn,
    client,
    widgetConfig: widgetConfigMerged,
    customer,
    helps,
    setCustomer(customer?: Customer) {
      setCustomer(customer ?? null)
    },
  }

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
