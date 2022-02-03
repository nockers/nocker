import React, { FC, useEffect, useState } from "react"
import { LoginResponse } from "../client"
import { ConfigContext, WidgetContext } from "../contexts"
import { useClient } from "../hooks/useClient"
import { Config } from "../types"

type Props = {
  config: Config
}

export const KnockrProvider: FC<Props> = (props) => {
  const client = useClient()

  const [data, setData] = useState<LoginResponse | Error | null>(null)

  useEffect(() => {
    client.login().then((data) => {
      setData(data)
    })
  }, [])

  if (data === null || data instanceof Error) {
    return null
  }

  return (
    <ConfigContext.Provider value={props.config}>
      <WidgetContext.Provider value={data}>
        {props.children}
      </WidgetContext.Provider>
    </ConfigContext.Provider>
  )
}
