import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrFormEmotionOne } from "../components"

export default {
  title: "KnockrFormEmotionOne",
  component: KnockrFormEmotionOne,
} as ComponentMeta<typeof KnockrFormEmotionOne>

export const Default: ComponentStoryObj<typeof KnockrFormEmotionOne> = {
  storyName: "KnockrFormEmotionOne",
  args: {
    config: {
      buttonText: widgetConfigDefault.emotionOneButtonText,
    },
    isActive: true,
  },
}
