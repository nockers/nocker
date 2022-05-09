import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrEmotion } from "../components"

const meta: ComponentMeta<typeof KnockrEmotion> = {
  title: "KnockrEmotion",
  component: KnockrEmotion,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isStandalone: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrEmotion> = (args) => {
  return <KnockrEmotion {...args} />
}

Story.storyName = "KnockrEmotion"

Story.args = {
  widgetConfig: widgetConfigDefault,
  isStandalone: true,
  hasBorder: true,
}
