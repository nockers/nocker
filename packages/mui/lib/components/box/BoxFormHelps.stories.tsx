import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxFormHelps } from "./BoxFormHelps"

export default {
  title: "BoxFormHelps",
  component: BoxFormHelps,
} as ComponentMeta<typeof BoxFormHelps>

export const Default: ComponentStoryObj<typeof BoxFormHelps> = {
  name: "BoxFormHelps",
  args: {
    inputPlaceholder: "何かお困りですか？",
    helps: [],
  },
}
