import { Box, extendTheme, ThemeProvider } from "@chakra-ui/react"
import { Story } from "@storybook/react"
import { NockerProvider } from "../lib/components/NockerProvider"
import { createConfig } from "../lib/utils"

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
  const theme = extendTheme({})

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
        <Story />
      </NockerProvider>
    </ThemeProvider>
  )
}

export const decorators = [withProvider]
