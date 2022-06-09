import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetTicket } from "./WidgetTicket"

export default {
  title: "WidgetTicket",
  component: WidgetTicket,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof WidgetTicket>

export const Default: ComponentStoryObj<typeof WidgetTicket> = {
  name: "WidgetTicket",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}
