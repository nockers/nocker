import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFormEmotionOne } from "../components"

const meta: ComponentMeta<typeof KnockrFormEmotionOne> = {
  title: "KnockrFormEmotionOne",
  component: KnockrFormEmotionOne,
}

export default meta

export const Story: ComponentStory<typeof KnockrFormEmotionOne> = (args) => {
  return <KnockrFormEmotionOne {...args} />
}

Story.storyName = "KnockrFormEmotionOne"

Story.args = {}
