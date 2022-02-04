import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrStatic } from "../components/KnockrStatic"

const meta: ComponentMeta<typeof KnockrStatic> = {
  title: "KnockrStatic",
  component: KnockrStatic,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockrStatic> = (args) => {
  return <KnockrStatic {...args} />
}

Story.storyName = "KnockrStatic"

Story.args = {}
