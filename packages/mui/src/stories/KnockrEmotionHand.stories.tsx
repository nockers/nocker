import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrEmotionHand } from "../components"

const meta: ComponentMeta<typeof KnockrEmotionHand> = {
  title: "KnockrEmotionHand",
  component: KnockrEmotionHand,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrEmotionHand> = (args) => {
  return <KnockrEmotionHand {...args} />
}

Story.storyName = "KnockrEmotionHand"

Story.args = {
  widgetConfig: widgetConfigDefault,
  hasBorder: true,
}
