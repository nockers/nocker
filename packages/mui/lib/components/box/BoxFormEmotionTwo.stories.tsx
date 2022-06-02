import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxFormEmotionTwo } from "./BoxFormEmotionTwo"

export default {
  title: "BoxFormEmotionTwo",
  component: BoxFormEmotionTwo,
  argTypes: {
    grade: { control: "number" },
  },
} as ComponentMeta<typeof BoxFormEmotionTwo>

export const Default: ComponentStoryObj<typeof BoxFormEmotionTwo> = {
  storyName: "BoxFormEmotionTwo",
  args: {
    config: {
      gradeOneMessage: widgetConfigDefault.emotionTwoGradeOneMessage,
      gradeTwoMessage: widgetConfigDefault.emotionTwoGradeTwoMessage,
      thanksMessage: widgetConfigDefault.emotionThanksMessage,
    },
    grade: 0,
  },
}
