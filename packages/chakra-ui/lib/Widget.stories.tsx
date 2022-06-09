import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Widget } from "./Widget"

export default {
  title: "Widget",
  component: Widget,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof Widget>

export const Default: ComponentStoryObj<typeof Widget> = {
  name: "Widget",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}
