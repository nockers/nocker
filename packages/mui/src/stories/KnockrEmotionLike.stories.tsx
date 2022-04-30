import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrEmotionLike } from "../components"

const meta: ComponentMeta<typeof KnockrEmotionLike> = {
  title: "KnockrEmotionLike",
  component: KnockrEmotionLike,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    textQuestion: { control: "text" },
    textThanks: { control: "text" },
    hasBorder: { control: "boolean" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrEmotionLike> = (args) => {
  return <KnockrEmotionLike {...args} />
}

Story.storyName = "KnockrEmotionLike"

Story.args = {
  textQuestion: "このページは役に立ちましたか？",
  textThanks: "回答ありがとうございます",
  hasBorder: true,
}
