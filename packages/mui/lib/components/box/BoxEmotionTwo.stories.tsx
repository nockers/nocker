import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxEmotionTwo } from "./BoxEmotionTwo"

export default {
  title: "internals/BoxFormEmotionTwo",
  component: BoxEmotionTwo,
  argTypes: {
    grade: { control: "number" },
  },
} as ComponentMeta<typeof BoxEmotionTwo>

export const Default: ComponentStoryObj<typeof BoxEmotionTwo> = {
  name: "BoxEmotionTwo",
  args: {
    gradeOneMessage: widgetConfigDefault.emotionTwoGradeOneMessage,
    gradeTwoMessage: widgetConfigDefault.emotionTwoGradeTwoMessage,
    thanksMessage: widgetConfigDefault.emotionThanksMessage,
    grade: 0,
  },
}
