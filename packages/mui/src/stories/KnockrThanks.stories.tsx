import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrThanks } from "../components"

const meta: ComponentMeta<typeof KnockrThanks> = {
  title: "KnockrThanks",
  component: KnockrThanks,
}

export default meta

export const Story: ComponentStory<typeof KnockrThanks> = (args) => {
  return <KnockrThanks {...args} />
}

Story.storyName = "KnockrThanks"

Story.args = {
  text: "ありがとうございます。フィードバックを送信しました。",
}
