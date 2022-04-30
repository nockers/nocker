import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCard } from "../components"

const meta: ComponentMeta<typeof KnockrCard> = {
  title: "KnockrCard",
  component: KnockrCard,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    emotionMessage: { control: "text" },
    emotionThanksMessage: { control: "text" },
    hideTicket: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrCard> = (args) => {
  return <KnockrCard {...args} />
}

Story.storyName = "KnockrCard"

Story.args = {
  hasHelps: false,
  hideTicket: true,
  isNotEmbedded: false,
  emotionType: "FIVE",
  emotionMessage: "このページは役に立ちましたか？",
  emotionThanksMessage: "回答ありがとうございます",
  hasBorder: true,
}
