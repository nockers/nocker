import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrFormEmotionTwo } from "../components"

export default {
  title: "KnockrFormEmotionTwo",
  component: KnockrFormEmotionTwo,
  argTypes: {
    grade: { control: "number" },
  },
} as ComponentMeta<typeof KnockrFormEmotionTwo>

export const Default: ComponentStoryObj<typeof KnockrFormEmotionTwo> = {
  storyName: "KnockrFormEmotionTwo",
  args: {
    config: {
      gradeOneMessage: widgetConfigDefault.emotionTwoGradeOneMessage,
      gradeTwoMessage: widgetConfigDefault.emotionTwoGradeTwoMessage,
      thanksMessage: widgetConfigDefault.emotionThanksMessage,
    },
    grade: 0,
  },
}
