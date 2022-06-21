import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone"
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone"
import { Box, createTheme, IconButton, ThemeProvider } from "@mui/material"
import { Nocker } from "@nocker/client"
import { NockerProvider } from "@nocker/react"
import { Story } from "@storybook/react"
import React, { useState } from "react"
import { createDefaultTheme } from "../lib/utils"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true,
    },
  },
  layout: "centered",
}

const withProvider = (Story: Story) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const defaultTheme = createDefaultTheme(isDarkMode ? "dark" : "light")

  const theme = createTheme(defaultTheme)

  // const baseURL = "http://localhost:3000/api"

  const baseURL = "https://nocker.app/api"

  const client = new Nocker({
    projectId: "xxxxxxxxxxxxxxxxxxxxx", // "7UVQakP4NIgO-IFYCHVi2",
    environment: "DEVELOPMENT",
    baseURL,
  })

  const onChangeDarkMode = () => {
    setDarkMode((value) => !value)
  }

  return (
    <ThemeProvider theme={theme}>
      <NockerProvider client={client}>
        <Box sx={{ position: "fixed", top: 16, right: 16 }}>
          <IconButton
            size={"small"}
            onClick={onChangeDarkMode}
            color={"primary"}
          >
            {isDarkMode ? <DarkModeTwoToneIcon /> : <LightModeTwoToneIcon />}
          </IconButton>
        </Box>
        <Box sx={{ width: (theme) => theme.spacing(40) }}>
          <Story />
        </Box>
      </NockerProvider>
    </ThemeProvider>
  )
}

export const decorators = [withProvider]
