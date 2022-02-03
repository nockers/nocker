import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockerFab } from "../components/KnockerFab"

const meta: ComponentMeta<typeof KnockerFab> = {
  title: "KnockerFab",
  component: KnockerFab,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockerFab> = (args) => {
  return <KnockerFab {...args} />
}

Story.storyName = "KnockerFab"

Story.args = {}
