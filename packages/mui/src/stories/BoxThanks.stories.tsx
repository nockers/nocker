import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxThanks } from "../components/box/BoxThanks"

export default {
  title: "BoxThanks",
  component: BoxThanks,
} as ComponentMeta<typeof BoxThanks>

export const Default: ComponentStoryObj<typeof BoxThanks> = {
  storyName: "BoxThanks",
  args: {
    config: {
      thanksMessage: widgetConfigDefault.ticketThanksMessage,
      buttonResetText: widgetConfigDefault.ticketButtonResetText,
    },
  },
}
