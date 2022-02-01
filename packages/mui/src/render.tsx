import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import React from "react"
import reactDOM from "react-dom"
import { KnockerFloating } from "./components/KnockerFloating"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  projectId: string
  baseURL: string
  environment: string
  colorMode: "dark" | "light"
  theme?: ThemeOptions
}

export const render = (props: Props) => {
  var container = document.createElement("div")

  document.body.appendChild(container)

  const defaultTheme = createDefaultTheme(props.colorMode)

  const theme = createTheme(props.theme ?? defaultTheme)

  reactDOM.render(
    <ThemeProvider theme={theme}>
      <KnockerFloating
        projectId={props.projectId}
        baseURL={props.baseURL}
        environment={"PRODUCTION"}
      />
    </ThemeProvider>,
    container
  )
}
