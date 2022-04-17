import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFloatingCard } from "../components"

const meta: ComponentMeta<typeof KnockrFloatingCard> = {
  title: "KnockrFloatingCard",
  component: KnockrFloatingCard,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockrFloatingCard> = (args) => {
  return <KnockrFloatingCard {...args} />
}

Story.storyName = "KnockrFloatingCard"

Story.args = {
  path: "/xxx/xxx",
  hasHelps: false,
  hasEmotion: true,
}
