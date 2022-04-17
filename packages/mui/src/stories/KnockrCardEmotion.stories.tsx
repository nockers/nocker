import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCardEmotion } from "../components"

const meta: ComponentMeta<typeof KnockrCardEmotion> = {
  title: "KnockrCardEmotion",
  component: KnockrCardEmotion,
}

export default meta

export const Story: ComponentStory<typeof KnockrCardEmotion> = (args) => {
  return <KnockrCardEmotion {...args} />
}

Story.storyName = "KnockrCardEmotion"

Story.args = {
  path: "/xxx/xxx",
}
