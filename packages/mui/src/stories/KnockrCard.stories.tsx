import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrCard } from "../components"

export default {
  title: "KnockrCard",
  component: KnockrCard,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isNotEmbedded: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof KnockrCard>

export const Default: ComponentStoryObj<typeof KnockrCard> = {
  storyName: "KnockrCard",
  args: {
    widgetConfig: widgetConfigDefault,
    hasHelps: false,
    isNotEmbedded: false,
    hasBorder: true,
  },
}
