import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockerFloatingCard } from "../components/KnockerFloatingCard"

const meta: ComponentMeta<typeof KnockerFloatingCard> = {
  title: "KnockerFloatingCard",
  component: KnockerFloatingCard,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockerFloatingCard> = (args) => {
  return <KnockerFloatingCard helpTreeItems={[]} {...args} />
}

Story.storyName = "KnockerFloatingCard"

Story.args = {}
