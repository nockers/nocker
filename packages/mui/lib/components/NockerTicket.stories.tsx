import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerTicket } from "./NockerTicket"

export default {
  title: "NockerTicket",
  component: NockerTicket,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof NockerTicket>

export const Default: ComponentStoryObj<typeof NockerTicket> = {
  storyName: "NockerTicket",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}
