import { ChakraProvider, theme } from "@chakra-ui/react"
import { Story } from "@storybook/react"

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
  return (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
