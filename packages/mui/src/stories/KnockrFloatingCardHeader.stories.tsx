import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFloatingCardHeader } from "../components/KnockrFloatingCardHeader"

const meta: ComponentMeta<typeof KnockrFloatingCardHeader> = {
  title: "KnockrFloatingCardHeader",
  component: KnockrFloatingCardHeader,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockrFloatingCardHeader> = (
  args
) => {
  return <KnockrFloatingCardHeader {...args} />
}

Story.storyName = "KnockrFloatingCardHeader"

Story.args = {}
