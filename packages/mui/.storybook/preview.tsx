import { createTheme, ThemeProvider } from "@mui/material"
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
}

const withChakra = (Story: Story) => {
  const defaultTheme = createDefaultTheme("light")

  const theme = createTheme(defaultTheme)

  const config = createConfig()

  return (
    <ThemeProvider theme={theme}>
      <KnockrProvider config={config}>
        <Story />
      </KnockrProvider>
    </ThemeProvider>
  )
}

export const decorators = [withChakra]
