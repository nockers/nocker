import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrApp } from "../components/KnockrApp"

const meta: ComponentMeta<typeof KnockrApp> = {
  title: "KnockrApp",
  component: KnockrApp,
  argTypes: {},
}

export default meta

export const Story: ComponentStory<typeof KnockrApp> = (args) => {
  return <KnockrApp {...args} />
}
