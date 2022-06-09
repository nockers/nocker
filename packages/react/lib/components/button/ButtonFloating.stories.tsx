import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonFloating } from "./ButtonFloating"

export default {
  title: "Components/ButtonFloating",
  component: ButtonFloating,
  argTypes: {
    grade: {
      options: [0, 1, 2, 3, 4],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonFloating>

export const Default: ComponentStoryObj<typeof ButtonFloating> = {
  name: "ButtonFloating",
  args: {},
}
