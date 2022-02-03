import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockerFloatingCardHeader } from "../components/KnockerFloatingCardHeader"

const meta: ComponentMeta<typeof KnockerFloatingCardHeader> = {
  title: "KnockerFloatingCardHeader",
  component: KnockerFloatingCardHeader,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockerFloatingCardHeader> = (
  args
) => {
  return <KnockerFloatingCardHeader {...args} />
}

Story.storyName = "KnockerFloatingCardHeader"

Story.args = {}
