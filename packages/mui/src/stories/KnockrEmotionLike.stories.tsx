import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrEmotionLike } from "../components"

const meta: ComponentMeta<typeof KnockrEmotionLike> = {
  title: "KnockrEmotionLike",
  component: KnockrEmotionLike,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrEmotionLike> = (args) => {
  return <KnockrEmotionLike {...args} />
}

Story.storyName = "KnockrEmotionLike"

Story.args = {
  widgetConfig: widgetConfigDefault,
  hasBorder: true,
}
