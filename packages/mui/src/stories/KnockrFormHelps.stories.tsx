import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrFormHelps } from "../components"

export default {
  title: "KnockrFormHelps",
  component: KnockrFormHelps,
} as ComponentMeta<typeof KnockrFormHelps>

export const Default: ComponentStoryObj<typeof KnockrFormHelps> = {
  storyName: "KnockrFormHelps",
  args: {
    inputPlaceholder: "何かお困りですか？",
    helps: [],
  },
}
