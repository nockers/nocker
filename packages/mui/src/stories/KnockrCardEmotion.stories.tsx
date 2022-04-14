import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCard } from "../components/KnockrCard"
import { KnockrCardEmotion } from "../components/KnockrCardEmotion"

const meta: ComponentMeta<typeof KnockrCard> = {
  title: "KnockrCardEmotion",
  component: KnockrCardEmotion,
}

export default meta

export const Story: ComponentStory<typeof KnockrCardEmotion> = (args) => {
  return <KnockrCardEmotion {...args} />
}

Story.storyName = "KnockrCardEmotion"

Story.args = {
  message: "このページはお役に立ちましたか？",
  endMessage: "ありがとうございました！",
}
