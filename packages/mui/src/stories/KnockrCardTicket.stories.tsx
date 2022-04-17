import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCard, KnockrCardTicket } from "../components"

const meta: ComponentMeta<typeof KnockrCard> = {
  title: "KnockrCardTicket",
  component: KnockrCardTicket,
}

export default meta

export const Story: ComponentStory<typeof KnockrCardTicket> = (args) => {
  return <KnockrCardTicket {...args} />
}

Story.storyName = "KnockrCardTicket"

Story.args = {}
