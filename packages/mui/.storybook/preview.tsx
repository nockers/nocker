import { Box, createTheme, ThemeProvider } from "@mui/material"
import { Story } from "@storybook/react"
import { KnockrProvider } from "../src/components/KnockrProvider"
import { createConfig, createDefaultTheme } from "../src/utils"
import { init } from "@sentry/browser"

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
  init({
    dsn: "https://6e199171fc8e4bc29906ad62cf2178e2@o482319.ingest.sentry.io/6312067",
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
    beforeSend(event) {
      for (const exception of event.exception?.values ?? []) {
        console.error(exception.value)
      }
      return event
    },
  })

  const defaultTheme = createDefaultTheme("light")

  const theme = createTheme(defaultTheme)

  console.log(process.env.STORYBOOK_LOCALHOST)

  const baseURL =
    process.env.STORYBOOK_LOCALHOST === "true"
      ? "http://localhost:3000/api"
      : "https://knocker.app/api"

  const config = createConfig({ baseURL })

  return (
    <ThemeProvider theme={theme}>
      <KnockrProvider config={config}>
        <Box sx={{ width: (theme) => theme.spacing(40) }}>
          <Story />
        </Box>
      </KnockrProvider>
    </ThemeProvider>
  )
}

export const decorators = [withProvider]
