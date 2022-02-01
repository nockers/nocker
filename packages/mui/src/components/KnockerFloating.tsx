import { Box, Grow } from "@mui/material"
import React, { FunctionComponent, useEffect, useState } from "react"
import { Knocker, LoginResponse } from "../client"
import { KnockerFabTrigger } from "./KnockerFabTrigger"
import { KnockerFloatingCard } from "./KnockerFloatingCard"

type Props = {
  projectId: string
  baseURL: string
  environment: "PRODUCTION" | "DEVELOPMENT"
}

export const KnockerFloating: FunctionComponent<Props> = (props) => {
  const [isOpen, setOpen] = useState(false)

  const [data, setData] = useState<LoginResponse | Error | null>(null)

  useEffect(() => {
    try {
      const knocker = new Knocker({
        projectId: props.projectId,
        environment: props.environment,
        baseURL: props.baseURL,
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
    <Box>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockerFloatingCard
            projectId={props.projectId}
            onClose={() => {
              setOpen(false)
            }}
            helpTreeItems={data.helpTreeItems}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <KnockerFabTrigger
            onOpen={() => {
              setOpen(true)
            }}
          />
        </Box>
      </Grow>
    </Box>
  )
}
