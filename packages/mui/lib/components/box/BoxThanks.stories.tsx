import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxThanks } from "./BoxThanks"

export default {
  title: "internals/BoxThanks",
  component: BoxThanks,
} as ComponentMeta<typeof BoxThanks>

export const Default: ComponentStoryObj<typeof BoxThanks> = {
  name: "BoxThanks",
  args: {
    message: widgetConfigDefault.ticketThanksMessage,
    buttonText: widgetConfigDefault.ticketButtonResetText,
  },
}
