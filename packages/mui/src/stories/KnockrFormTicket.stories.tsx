import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrFormTicket } from "../components"

export default {
  title: "KnockrFormTicket",
  component: KnockrFormTicket,
} as ComponentMeta<typeof KnockrFormTicket>

export const Default: ComponentStoryObj<typeof KnockrFormTicket> = {
  storyName: "KnockrFormTicket",
  args: {
    config: {
      buttonSubmitText: widgetConfigDefault.ticketButtonSubmitText,
      inputPlaceholder: widgetConfigDefault.ticketInputPlaceholder,
    },
    text: "",
    isLoading: false,
    hasImage: false,
  },
}
