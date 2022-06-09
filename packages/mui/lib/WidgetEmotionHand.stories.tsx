import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetEmotionHand } from "./WidgetEmotionHand"

export default {
  title: "WidgetEmotionHand",
  component: WidgetEmotionHand,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof WidgetEmotionHand>

export const Default: ComponentStoryObj<typeof WidgetEmotionHand> = {
  name: "WidgetEmotionHand",
  args: {
    widgetConfig: widgetConfigDefault,
    hasBorder: true,
  },
}
