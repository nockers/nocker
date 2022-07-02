import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxEmotion } from "./BoxEmotion"

export default {
  title: "internals/BoxEmotion",
  component: BoxEmotion,
} as ComponentMeta<typeof BoxEmotion>

export const Default: ComponentStoryObj<typeof BoxEmotion> = {
  name: "BoxEmotion",
  args: {
    grade: 2,
    gradeFiveMessage: widgetConfigDefault.emotionFiveGradeFiveMessage,
    gradeFourMessage: widgetConfigDefault.emotionFiveGradeFourMessage,
    gradeThreeMessage: widgetConfigDefault.emotionFiveGradeThreeMessage,
    gradeTwoMessage: widgetConfigDefault.emotionFiveGradeTwoMessage,
    gradeOneMessage: widgetConfigDefault.emotionFiveGradeOneMessage,
  },
}
