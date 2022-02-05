import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import React from "react"
import reactDOM from "react-dom"
import { KnockrFab } from "./components/KnockrFab"
import { KnockrProvider } from "./components/KnockrProvider"
import { WidgetEnvironment } from "./types"
import { createConfig } from "./utils"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  projectId: string
  baseURL: string
  environment: WidgetEnvironment
  colorMode: "dark" | "light"
  theme?: ThemeOptions
}

export const render = (props: Props) => {
  var container = document.createElement("div")

  document.body.appendChild(container)

  const defaultTheme = createDefaultTheme(props.colorMode)

  const theme = createTheme(props.theme ?? defaultTheme)

  const config = createConfig({
    projectId: props.projectId,
    baseURL: props.baseURL,
    environment: props.environment,
  })

  reactDOM.render(
    <ThemeProvider theme={theme}>
      <KnockrProvider config={config}>
        <KnockrFab />
      </KnockrProvider>
    </ThemeProvider>,
    container
  )
}