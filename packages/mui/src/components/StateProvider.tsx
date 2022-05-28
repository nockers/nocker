import React, { FC, ReactNode, useEffect, useState } from "react"
import { ConfigContext } from "../contexts"
import { InternalState } from "../internals"

type Props = {
  children: ReactNode
}

export const StateProvider: FC<Props> = (props) => {
  const state = new InternalState()

  const [isLoggingIn, setLoading] = useState(() => {
    return state.isLoggingIn
  })

  useEffect(() => {
    if (!state.isLoggingIn) return
    state.listenLoginState(() => {
      setLoading(false)
    })
  }, [])

  const config = state.getConfig()

  const value = { ...config, isLoggingIn }

  return (
    <ConfigContext.Provider value={value}>
      {props.children}
    </ConfigContext.Provider>
  )
}
