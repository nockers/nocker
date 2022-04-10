import { Config, LoginResponse } from "@knockr/client"
import { captureException } from "@sentry/minimal"
import React, { FC, useEffect, useState } from "react"
import { ConfigContext, WidgetContext } from "../contexts"
import { useClient } from "../hooks"

type Props = {
  config: Config
}

export const KnockrProvider: FC<Props> = (props) => {
  const client = useClient(props.config)

  const [data, setData] = useState<LoginResponse | Error | null>(null)

  useEffect(() => {
    client
      .login()
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        captureException(error)
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
