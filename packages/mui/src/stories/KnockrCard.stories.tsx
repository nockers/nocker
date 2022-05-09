import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCard } from "../components"

const meta: ComponentMeta<typeof KnockrCard> = {
  title: "KnockrCard",
  component: KnockrCard,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isNotEmbedded: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrCard> = (args) => {
  return <KnockrCard {...args} />
}

Story.storyName = "KnockrCard"

Story.args = {
  widgetConfig: widgetConfigDefault,
  hasHelps: false,
  isNotEmbedded: false,
  hasBorder: true,
}
