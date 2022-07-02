import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { BoxHelps } from "./BoxHelps"

export default {
  title: "internals/BoxHelps",
  component: BoxHelps,
} as ComponentMeta<typeof BoxHelps>

export const Default: ComponentStoryObj<typeof BoxHelps> = {
  name: "BoxHelps",
  args: {
    inputPlaceholder: "何かお困りですか？",
    helps: [],
  },
}
