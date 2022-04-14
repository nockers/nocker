import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCard } from "../components/KnockrCard"
import { KnockrEmotion } from "../components/KnockrEmotion"

const meta: ComponentMeta<typeof KnockrCard> = {
  title: "KnockrEmotion",
  component: KnockrEmotion,
}

export default meta

export const Story: ComponentStory<typeof KnockrEmotion> = (args) => {
  return <KnockrEmotion {...args} />
}

Story.storyName = "KnockrEmotion"

Story.args = {
  endMessage: "ありがとうございました！",
}
