import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrTicket } from "../components"

const meta: ComponentMeta<typeof KnockrTicket> = {
  title: "KnockrTicket",
  component: KnockrTicket,
  argTypes: {
    pagePath: { control: "text" },
    inputPlaceholder: { control: "text" },
    buttonText: { control: "text" },
    textThanks: { control: "text" },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrTicket> = (args) => {
  return <KnockrTicket {...args} />
}

Story.storyName = "KnockrTicket"

Story.args = {
  pagePath: "/xxx/xxx",
  inputPlaceholder: "製品の改善についてご意見・ご要望をお聞かせください。",
  buttonText: "送信する",
  textThanks: "",
}
