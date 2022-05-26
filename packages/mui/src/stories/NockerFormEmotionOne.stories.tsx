import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFormEmotionOne } from "../components"

export default {
  title: "NockerFormEmotionOne",
  component: NockerFormEmotionOne,
} as ComponentMeta<typeof NockerFormEmotionOne>

export const Default: ComponentStoryObj<typeof NockerFormEmotionOne> = {
  storyName: "NockerFormEmotionOne",
  args: {
    config: {
      buttonText: widgetConfigDefault.emotionOneButtonText,
    },
    isActive: true,
  },
}
