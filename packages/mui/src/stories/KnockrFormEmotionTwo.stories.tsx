import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFormEmotionTwo } from "../components"

const meta: ComponentMeta<typeof KnockrFormEmotionTwo> = {
  title: "KnockrFormEmotionTwo",
  component: KnockrFormEmotionTwo,
  argTypes: {
    grade: { control: "number" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrFormEmotionTwo> = (args) => {
  return <KnockrFormEmotionTwo {...args} />
}

Story.storyName = "KnockrFormEmotionTwo"

Story.args = {
  config: {
    gradeOneMessage: widgetConfigDefault.emotionTwoGradeOneMessage,
    gradeTwoMessage: widgetConfigDefault.emotionTwoGradeTwoMessage,
    thanksMessage: widgetConfigDefault.emotionThanksMessage,
  },
  grade: 0,
}
