import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockerFloating } from "../components/KnockerFloating"

const meta: ComponentMeta<typeof KnockerFloating> = {
  title: "KnockerFloating",
  component: KnockerFloating,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockerFloating> = (args) => {
  return <KnockerFloating projectId={"test"} {...args} />
}
