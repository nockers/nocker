import React, { FunctionComponent, useEffect, useState } from "react"
import { Knocker, LoginResponse } from "../client"
import { KnockerStaticCard } from "./KnockerStaticCard"

type Props = {
  projectId: string
}

export const KnockerStatic: FunctionComponent<Props> = (props) => {
  const [data, setData] = useState<LoginResponse | Error | null>(null)

  useEffect(() => {
    try {
      const knocker = new Knocker({
        projectId: props.projectId,
        environment: "PRODUCTION",
        baseURL: "/api",
      })

      knocker.login().then((loginResponse) => {
        setData(loginResponse)
      })
    } catch (error) {
      console.error(error)
    }
  }, [props.projectId])

  if (data === null) {
    return null
  }

  if (data instanceof Error) {
    return null
  }

  return (
    <KnockerStaticCard
      projectId={props.projectId}
      helpTreeItems={data.helpTreeItems}
    />
  )
}
