import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFab } from "./NockerFab"

export default {
  title: "Nocker",
  component: NockerFab,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof NockerFab>

export const Default: ComponentStoryObj<typeof NockerFab> = {
  name: "Nocker",
  args: {},
}