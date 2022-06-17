import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonEmotion } from "./ButtonEmotion"

export default {
  title: "Components/ButtonEmotion",
  component: ButtonEmotion,
  argTypes: {
    grade: {
      options: [0, 1, 2, 3, 4],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ButtonEmotion>

export const Default: ComponentStoryObj<typeof ButtonEmotion> = {
  name: "ButtonEmotion",
  args: {
    isActive: false,
    grade: 4,
  },
}
