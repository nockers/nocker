import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ButtonEmotionOne } from "./ButtonEmotionOne"

export default {
  title: "internals/ButtonEmotionOne",
  component: ButtonEmotionOne,
} as ComponentMeta<typeof ButtonEmotionOne>

export const Default: ComponentStoryObj<typeof ButtonEmotionOne> = {
  name: "ButtonEmotionOne",
  args: {
    config: {
      buttonText: widgetConfigDefault.emotionOneButtonText,
    },
    isActive: true,
  },
}
