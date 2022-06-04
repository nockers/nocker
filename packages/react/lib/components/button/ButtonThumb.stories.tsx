import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonThumb } from "./ButtonThumb"

export default {
  title: "Components/ButtonThumb",
  component: ButtonThumb,
  argTypes: {},
} as ComponentMeta<typeof ButtonThumb>

export const Default: ComponentStoryObj<typeof ButtonThumb> = {
  name: "ButtonThumb",
  args: {
    children: widgetConfigDefault.ticketButtonSubmitText,
    isDisabled: false,
  },
}
