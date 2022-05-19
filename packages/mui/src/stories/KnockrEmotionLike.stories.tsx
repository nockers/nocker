import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrEmotionLike } from "../components"

export default {
  title: "KnockrEmotionLike",
  component: KnockrEmotionLike,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof KnockrEmotionLike>

export const Default: ComponentStoryObj<typeof KnockrEmotionLike> = {
  storyName: "KnockrEmotionLike",
  args: {
    widgetConfig: widgetConfigDefault,
    hasBorder: true,
  },
}
