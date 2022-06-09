import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetFab } from "./WidgetFab"

export default {
  title: "WidgetFab",
  component: WidgetFab,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof WidgetFab>

export const Default: ComponentStoryObj<typeof WidgetFab> = {
  name: "WidgetFab",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}
