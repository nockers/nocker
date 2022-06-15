import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonFilled } from "./ButtonFilled"

export default {
  title: "Components/ButtonFilled",
  component: ButtonFilled,
  argTypes: {},
} as ComponentMeta<typeof ButtonFilled>

export const Default: ComponentStoryObj<typeof ButtonFilled> = {
  name: "ButtonFilled",
  args: {
    children: widgetConfigDefault.ticketButtonSubmitText,
    isLoading: false,
    isDisabled: false,
  },
}
