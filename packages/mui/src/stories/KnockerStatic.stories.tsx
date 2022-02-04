import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockerStatic } from "../components/KnockerStatic"

const meta: ComponentMeta<typeof KnockerStatic> = {
  title: "KnockerStatic",
  component: KnockerStatic,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockerStatic> = (args) => {
  return <KnockerStatic {...args} />
}

Story.storyName = "KnockerStatic"

Story.args = {}
