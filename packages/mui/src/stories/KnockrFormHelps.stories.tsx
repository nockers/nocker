import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFormHelps } from "../components"

const meta: ComponentMeta<typeof KnockrFormHelps> = {
  title: "KnockrFormHelps",
  component: KnockrFormHelps,
}

export default meta

export const Story: ComponentStory<typeof KnockrFormHelps> = (args) => {
  return <KnockrFormHelps {...args} />
}

Story.storyName = "KnockrFormHelps"

Story.args = {
  inputPlaceholder: "何かお困りですか？",
  helps: [],
}
