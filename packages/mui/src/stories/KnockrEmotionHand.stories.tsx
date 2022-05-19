import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrEmotionHand } from "../components"

export default {
  title: "KnockrEmotionHand",
  component: KnockrEmotionHand,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof KnockrEmotionHand>

export const Default: ComponentStoryObj<typeof KnockrEmotionHand> = {
  storyName: "KnockrEmotionHand",
  args: {
    widgetConfig: widgetConfigDefault,
    hasBorder: true,
  },
}
