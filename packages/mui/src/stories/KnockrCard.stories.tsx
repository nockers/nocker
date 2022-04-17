import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCard } from "../components"

const meta: ComponentMeta<typeof KnockrCard> = {
  title: "KnockrCard",
  component: KnockrCard,
}

export default meta

export const Story: ComponentStory<typeof KnockrCard> = (args) => {
  return <KnockrCard {...args} />
}

Story.storyName = "KnockrCard"

Story.args = {
  path: "/xxx/xxx",
  hasHelps: false,
}
