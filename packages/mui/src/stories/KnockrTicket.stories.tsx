import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrTicket } from "../components"

const meta: ComponentMeta<typeof KnockrTicket> = {
  title: "KnockrTicket",
  component: KnockrTicket,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrTicket> = (args) => {
  return <KnockrTicket {...args} />
}

Story.storyName = "KnockrTicket"

Story.args = {
  widgetConfig: widgetConfigDefault,
}
