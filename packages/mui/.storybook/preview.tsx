import { createTheme, ThemeProvider } from "@mui/material"
import { Story } from "@storybook/react"
import { createDefaultTheme } from "../src/utils/createDefaultTheme"

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

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withChakra]
