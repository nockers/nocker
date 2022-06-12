import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetFloating } from "./WidgetFloating"

export default {
  title: "WidgetFloating",
  component: WidgetFloating,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof WidgetFloating>

export const Default: ComponentStoryObj<typeof WidgetFloating> = {
  name: "WidgetFloating",
  args: {
    isOpen: true,
    position: { bottom: 16, right: 16 },
    widgetConfig: widgetConfigDefault,
  },
}
