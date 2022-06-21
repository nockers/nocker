import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetEmotion } from "./WidgetEmotion"

export default {
  title: "WidgetEmotion",
  component: WidgetEmotion,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isStandalone: { control: "boolean" },
  },
} as ComponentMeta<typeof WidgetEmotion>

export const Default: ComponentStoryObj<typeof WidgetEmotion> = {
  name: "WidgetEmotion",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}
