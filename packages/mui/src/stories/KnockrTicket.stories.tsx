import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrTicket } from "../components"

export default {
  title: "KnockrTicket",
  component: KnockrTicket,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof KnockrTicket>

export const Default: ComponentStoryObj<typeof KnockrTicket> = {
  storyName: "KnockrTicket",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}
