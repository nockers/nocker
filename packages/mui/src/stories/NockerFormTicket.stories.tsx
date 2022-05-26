import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFormTicket } from "../components"

export default {
  title: "NockerFormTicket",
  component: NockerFormTicket,
} as ComponentMeta<typeof NockerFormTicket>

export const Default: ComponentStoryObj<typeof NockerFormTicket> = {
  storyName: "NockerFormTicket",
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
