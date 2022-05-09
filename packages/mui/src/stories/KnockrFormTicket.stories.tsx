import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFormTicket } from "../components"

const meta: ComponentMeta<typeof KnockrFormTicket> = {
  title: "KnockrFormTicket",
  component: KnockrFormTicket,
}

export default meta

export const Story: ComponentStory<typeof KnockrFormTicket> = (args) => {
  return <KnockrFormTicket {...args} />
}

Story.storyName = "KnockrFormTicket"

Story.args = {
  config: {
    buttonSubmitText: widgetConfigDefault.ticketButtonSubmitText,
    inputPlaceholder: widgetConfigDefault.ticketInputPlaceholder,
  },
  text: "",
  isLoading: false,
  hasImage: false,
}
