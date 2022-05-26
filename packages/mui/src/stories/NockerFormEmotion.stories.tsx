import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFormEmotion } from "../components"

export default {
  title: "NockerFormEmotion",
  component: NockerFormEmotion,
} as ComponentMeta<typeof NockerFormEmotion>

export const Default: ComponentStoryObj<typeof NockerFormEmotion> = {
  storyName: "NockerFormEmotion",
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
