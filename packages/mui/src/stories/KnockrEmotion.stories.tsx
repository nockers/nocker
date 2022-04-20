import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrEmotion } from "../components"

const meta: ComponentMeta<typeof KnockrEmotion> = {
  title: "KnockrEmotion",
  component: KnockrEmotion,
}

export default meta

export const Story: ComponentStory<typeof KnockrEmotion> = (args) => {
  return <KnockrEmotion {...args} />
}

Story.storyName = "KnockrEmotion"

Story.args = {
  pagePath: "/xxx/xxx",
}
