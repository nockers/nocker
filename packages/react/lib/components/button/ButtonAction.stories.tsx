import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonAction } from "./ButtonAction"

export default {
  title: "Components/ButtonAction",
  component: ButtonAction,
  argTypes: {
    grade: {
      options: [0, 1, 2, 3, 4],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonAction>

export const Default: ComponentStoryObj<typeof ButtonAction> = {
  name: "ButtonAction",
  args: {
    icon: "",
  },
}
