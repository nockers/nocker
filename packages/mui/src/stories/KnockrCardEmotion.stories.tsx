import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCardEmotion } from "../components/KnockrCardEmotion"
import { KnockrStatic } from "../components/KnockrStatic"

const meta: ComponentMeta<typeof KnockrStatic> = {
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
