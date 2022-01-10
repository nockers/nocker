import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFab } from "../components/KnockrFab"

const meta: ComponentMeta<typeof KnockrFab> = {
  title: "KnockrFab",
  component: KnockrFab,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockrFab> = (args) => {
  return <KnockrFab {...args} />
}
