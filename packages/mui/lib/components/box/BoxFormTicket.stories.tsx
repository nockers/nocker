import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxFormTicket } from "./BoxFormTicket"

export default {
  title: "BoxFormTicket",
  component: BoxFormTicket,
} as ComponentMeta<typeof BoxFormTicket>

export const Default: ComponentStoryObj<typeof BoxFormTicket> = {
  storyName: "BoxFormTicket",
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
