import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerCard } from "./NockerCard"

export default {
  title: "NockerCard",
  component: NockerCard,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isNotEmbedded: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof NockerCard>

export const Default: ComponentStoryObj<typeof NockerCard> = {
  name: "NockerCard",
  args: {
    widgetConfig: widgetConfigDefault,
    hasHelps: false,
    isNotEmbedded: false,
    hasBorder: true,
  },
}
