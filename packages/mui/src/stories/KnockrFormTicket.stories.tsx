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
  text: "",
  inputPlaceholder: "製品の改善についてご意見・ご要望をお聞かせください。",
  buttonText: "送信する",
  hasImage: false,
  isLoading: false,
}
