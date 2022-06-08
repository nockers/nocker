import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Nocker } from "./Nocker"

export default {
  title: "Nocker",
  component: Nocker,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof Nocker>

export const Default: ComponentStoryObj<typeof Nocker> = {
  name: "Nocker",
  args: {
    pagePath: "",
    pageTitle: "",
    widgetConfig: widgetConfigDefault,
  },
}
