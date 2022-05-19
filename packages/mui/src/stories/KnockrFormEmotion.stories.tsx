import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrFormEmotion } from "../components"

export default {
  title: "KnockrFormEmotion",
  component: KnockrFormEmotion,
} as ComponentMeta<typeof KnockrFormEmotion>

export const Default: ComponentStoryObj<typeof KnockrFormEmotion> = {
  storyName: "KnockrFormEmotion",
  args: {
    grade: 2,
    config: {
      gradeFiveMessage: widgetConfigDefault.emotionFiveGradeFiveMessage,
      gradeFourMessage: widgetConfigDefault.emotionFiveGradeFourMessage,
      gradeThreeMessage: widgetConfigDefault.emotionFiveGradeThreeMessage,
      gradeTwoMessage: widgetConfigDefault.emotionFiveGradeTwoMessage,
      gradeOneMessage: widgetConfigDefault.emotionFiveGradeOneMessage,
    },
  },
}
