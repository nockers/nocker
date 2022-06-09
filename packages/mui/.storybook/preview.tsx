import { Box, createTheme, ThemeProvider } from "@mui/material"
import { Nocker } from "@nocker/client"
import { NockerProvider } from "@nocker/react"
import { Story } from "@storybook/react"
import React from "react"
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
  const defaultTheme = createDefaultTheme("light")

  const theme = createTheme(defaultTheme)

  const baseURL =
    process.env.STORYBOOK_LOCALHOST === "true"
      ? "http://localhost:3000/api"
      : "https://nocker.app/api"

  const client = new Nocker({
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "DEVELOPMENT",
    baseURL,
  })

  return (
    <ThemeProvider theme={theme}>
      <NockerProvider client={client}>
        <Box sx={{ width: (theme) => theme.spacing(40) }}>
          <Story />
        </Box>
      </NockerProvider>
    </ThemeProvider>
  )
}

export const decorators = [withProvider]
