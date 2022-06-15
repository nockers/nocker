import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { TextareaTicket } from "./TextareaTicket"

export default {
  title: "Components/TextareaTicket",
  component: TextareaTicket,
  argTypes: {},
} as ComponentMeta<typeof TextareaTicket>

export const Default: ComponentStoryObj<typeof TextareaTicket> = {
  name: "TextareaTicket",
  args: {
    placeholder: widgetConfigDefault.ticketInputPlaceholder,
    isLoading: false,
  },
}
