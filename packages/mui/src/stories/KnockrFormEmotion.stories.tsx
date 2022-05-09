import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFormEmotion } from "../components"

const meta: ComponentMeta<typeof KnockrFormEmotion> = {
  title: "KnockrFormEmotion",
  component: KnockrFormEmotion,
}

export default meta

export const Story: ComponentStory<typeof KnockrFormEmotion> = (args) => {
  return <KnockrFormEmotion {...args} />
}

Story.storyName = "KnockrFormEmotion"

Story.args = {
  grade: 2,
  config: {
    gradeFiveMessage: widgetConfigDefault.emotionFiveGradeFiveMessage,
    gradeFourMessage: widgetConfigDefault.emotionFiveGradeFourMessage,
    gradeThreeMessage: widgetConfigDefault.emotionFiveGradeThreeMessage,
    gradeTwoMessage: widgetConfigDefault.emotionFiveGradeTwoMessage,
    gradeOneMessage: widgetConfigDefault.emotionFiveGradeOneMessage,
  },
}
