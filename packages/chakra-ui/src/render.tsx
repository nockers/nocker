import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import reactDOM from "react-dom"
import { KnockrFab } from "./components/KnockrFab"

type Props = {
  projectId: string
  initialColorMode: "dark" | "light"
  useSystemColorMode: boolean
}

export const render = (props: Props) => {
  var container = document.createElement("div")

  document.body.appendChild(container)

  const theme = extendTheme({
    config: {
      initialColorMode: props.initialColorMode ?? "light",
      useSystemColorMode: props.useSystemColorMode,
    },
  })

  reactDOM.render(
    <ChakraProvider theme={theme}>
      <KnockrFab projectId={props.projectId} />
    </ChakraProvider>,
    container
  )
}
