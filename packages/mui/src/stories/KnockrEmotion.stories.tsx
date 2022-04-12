import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrEmotion } from "../components/KnockrEmotion"
import { KnockrStatic } from "../components/KnockrStatic"

const meta: ComponentMeta<typeof KnockrStatic> = {
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
