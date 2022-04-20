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

Story.args = {
  pagePath: "/xxx/xxx",
  formTicketInputPlaceholder:
    "製品の改善についてご意見・ご要望をお聞かせください。",
  formTicketButtonText: "送信する",
  hasHelps: false,
}
