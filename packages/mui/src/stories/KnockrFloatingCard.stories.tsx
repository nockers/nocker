import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFloatingCard } from "../components/KnockrFloatingCard"

const meta: ComponentMeta<typeof KnockrFloatingCard> = {
  title: "KnockrFloatingCard",
  component: KnockrFloatingCard,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockrFloatingCard> = (args) => {
  return <KnockrFloatingCard helpTreeItems={[]} {...args} />
}

Story.storyName = "KnockrFloatingCard"

Story.args = {}
