import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Widget } from "./Widget"

export default {
  title: "Widget",
  component: Widget,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isNotEmbedded: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof Widget>

export const Default: ComponentStoryObj<typeof Widget> = {
  name: "Default",
  args: {
    widgetConfig: widgetConfigDefault,
    isNotEmbedded: false,
  },
}

export const WithMinimal: ComponentStoryObj<typeof Widget> = {
  name: "Minimal",
  args: {
    widgetConfig: {
      ...widgetConfigDefault,
      isMinimal: true,
    },
    isNotEmbedded: false,
  },
}
