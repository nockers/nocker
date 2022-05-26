import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFormEmotionTwo } from "../components"

export default {
  title: "NockerFormEmotionTwo",
  component: NockerFormEmotionTwo,
  argTypes: {
    grade: { control: "number" },
  },
} as ComponentMeta<typeof NockerFormEmotionTwo>

export const Default: ComponentStoryObj<typeof NockerFormEmotionTwo> = {
  storyName: "NockerFormEmotionTwo",
  args: {
    config: {
      gradeOneMessage: widgetConfigDefault.emotionTwoGradeOneMessage,
      gradeTwoMessage: widgetConfigDefault.emotionTwoGradeTwoMessage,
      thanksMessage: widgetConfigDefault.emotionThanksMessage,
    },
    grade: 0,
  },
}
