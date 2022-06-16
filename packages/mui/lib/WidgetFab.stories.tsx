import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { WidgetFab } from "./WidgetFab"

export default {
  title: "WidgetFab",
  component: WidgetFab,
  argTypes: {},
} as ComponentMeta<typeof WidgetFab>

export const Default: ComponentStoryObj<typeof WidgetFab> = {
  name: "Default",
  args: {
    widgetConfig: widgetConfigDefault,
  },
}

export const TypeIcon: ComponentStoryObj<typeof WidgetFab> = {
  name: "Icon",
  args: {
    widgetConfig: {
      ...widgetConfigDefault,
      fabType: "ICON",
    },
  },
}

export const TypeIconWithText: ComponentStoryObj<typeof WidgetFab> = {
  name: "Text with Icon",
  args: {
    widgetConfig: {
      ...widgetConfigDefault,
      fabType: "TEXT_WITH_ICON",
      fabText: "フィードバック",
    },
  },
}
