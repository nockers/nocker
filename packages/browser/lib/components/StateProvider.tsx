import { ConfigContext } from "@nocker/mui"
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

  useEffect(() => {
    if (!state.isLoggingIn) return
    state.listenLoginState(() => {
      setLoading(false)
    })
  }, [])

  const value = state.getProviderValue(isLoggingIn)

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
