import { Box, createTheme, ThemeProvider } from "@mui/material"
import { Story } from "@storybook/react"
import { NockerProvider } from "../src/components/NockerProvider"
import { createConfig, createDefaultTheme } from "../src/utils"

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

  const config = createConfig({
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "DEVELOPMENT",
    baseURL,
  })

  return (
    <ThemeProvider theme={theme}>
      <NockerProvider config={config}>
        <Box sx={{ width: (theme) => theme.spacing(40) }}>
          <Story />
        </Box>
      </NockerProvider>
    </ThemeProvider>
  )
}

export const decorators = [withProvider]
