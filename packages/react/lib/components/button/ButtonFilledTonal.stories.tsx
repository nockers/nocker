import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonFilledTonal } from "./ButtonFilledTonal"

export default {
  title: "Components/ButtonFilledTonal",
  component: ButtonFilledTonal,
  argTypes: {},
} as ComponentMeta<typeof ButtonFilledTonal>

export const Default: ComponentStoryObj<typeof ButtonFilledTonal> = {
  name: "ButtonFilledTonal",
  args: {
    children: widgetConfigDefault.ticketButtonSubmitText,
    isLoading: false,
    isDisabled: false,
  },
}
