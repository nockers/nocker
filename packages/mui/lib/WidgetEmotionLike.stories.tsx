import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetEmotionLike } from "./WidgetEmotionLike"

export default {
  title: "WidgetEmotionLike",
  component: WidgetEmotionLike,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof WidgetEmotionLike>

export const Default: ComponentStoryObj<typeof WidgetEmotionLike> = {
  name: "WidgetEmotionLike",
  args: {
    widgetConfig: widgetConfigDefault,
    hasBorder: true,
  },
}
