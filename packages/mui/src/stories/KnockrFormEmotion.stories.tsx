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
  emotionGrade: 2,
  textMessage: "回答ありがとうございます",
}
