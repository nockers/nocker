import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { InputTicket } from "./BoxTicket"

export default {
  title: "internals/BoxFormTicket",
  component: InputTicket,
} as ComponentMeta<typeof InputTicket>

export const Default: ComponentStoryObj<typeof InputTicket> = {
  name: "BoxFormTicket",
  args: {
    value: "",
    isLoading: false,
  },
}
