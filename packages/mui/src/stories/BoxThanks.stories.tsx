import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { BoxThanks } from "../components/box/BoxThanks"

const meta: ComponentMeta<typeof BoxThanks> = {
  title: "BoxThanks",
  component: BoxThanks,
}

export default meta

export const Story: ComponentStory<typeof BoxThanks> = (args) => {
  return <BoxThanks {...args} />
}

Story.storyName = "BoxThanks"

Story.args = {
  config: {
    thanksMessage: widgetConfigDefault.ticketThanksMessage,
    buttonResetText: widgetConfigDefault.ticketButtonResetText,
  },
}
