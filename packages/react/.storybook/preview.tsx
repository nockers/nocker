import { Nocker } from "@nocker/client"
import { Story } from "@storybook/react"
import React from "react"
import { NockerProvider } from "../lib/NockerProvider"
import "./main.css"

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
  // const baseURL = "http://localhost:3000/api"

  const baseURL = "https://nocker.app/api"

  const client = new Nocker({
    projectId: "wkLoRg1EBAq2fh1AFgXMO",
    environment: "DEVELOPMENT",
    baseURL,
  })

  return (
    <NockerProvider client={client}>
      <div className={"w-80"}>
        <Story />
      </div>
    </NockerProvider>
  )
}

export const decorators = [withProvider]
