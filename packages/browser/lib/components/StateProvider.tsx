import { ConfigContext, Customer, widgetConfigDefault } from "@nocker/mui"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { State } from "../models"

type Props = {
  children: ReactNode
}

export const StateProvider: FC<Props> = (props) => {
  const state = new State()

  const [isLoggingIn, setLoading] = useState(() => {
    return state.isLoggingIn
  })

  const [customer, setCustomer] = useState(() => {
    return state.customer
  })

  const [widgetConfig, setWidgetConfig] = useState(() => {
    return state.widgetConfig
  })

  const [helps, setHelps] = useState(() => {
    return state.helps
  })

  useEffect(() => {
    state.listenCustomerEffect((customer) => {
      setCustomer(customer)
      setLoading(false)
    })
    state.listenProjectEffect((project) => {
      setWidgetConfig(project.widgetConfig)
      setHelps(project.helps)
    })
  }, [])

  const mergedWidgetConfig = {
    ...widgetConfigDefault,
    ...widgetConfig,
    ...state.widgetConfigOverride,
  }

  const value = {
    isLoggingIn,
    client: state.client,
    widgetConfig: mergedWidgetConfig,
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
