import { Box, createTheme, ThemeProvider } from "@mui/material"
import { Story } from "@storybook/react"
import { KnockrProvider } from "../src/components/KnockrProvider"
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

const withChakra = (Story: Story) => {
  const defaultTheme = createDefaultTheme("light")

  const theme = createTheme(defaultTheme)

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api"
      : "https://Knockr.app/api"

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

export const decorators = [withChakra]
