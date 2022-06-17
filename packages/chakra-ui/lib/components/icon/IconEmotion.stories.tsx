import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { IconEmotion } from "./IconEmotion"

export default {
  title: "Components/IconEmotion",
  component: IconEmotion,
  argTypes: {
    grade: {
      options: [0, 1, 2, 3, 4],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof IconEmotion>

export const Default: ComponentStoryObj<typeof IconEmotion> = {
  name: "IconEmotion",
  args: {
    grade: 0,
  },
}
