import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFormHelps } from "../components"

export default {
  title: "NockerFormHelps",
  component: NockerFormHelps,
} as ComponentMeta<typeof NockerFormHelps>

export const Default: ComponentStoryObj<typeof NockerFormHelps> = {
  storyName: "NockerFormHelps",
  args: {
    inputPlaceholder: "何かお困りですか？",
    helps: [],
  },
}
