import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxFormEmotionOne } from "./BoxFormEmotionOne"

export default {
  title: "internals/BoxFormEmotionOne",
  component: BoxFormEmotionOne,
} as ComponentMeta<typeof BoxFormEmotionOne>

export const Default: ComponentStoryObj<typeof BoxFormEmotionOne> = {
  name: "BoxFormEmotionOne",
  args: {
    config: {
      buttonText: widgetConfigDefault.emotionOneButtonText,
    },
    isActive: true,
  },
}
