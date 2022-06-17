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
  name: "Default",
  args: {
    widgetConfig: {
      fabType: "DEFAULT",
      fabText: null,
      fabIcon: null,
    },
  },
}

export const WithText: ComponentStoryObj<typeof WidgetFab> = {
  name: "Text",
  args: {
    widgetConfig: {
      fabType: "TEXT",
      fabText: "このページは役に立ちましたか？",
    },
  },
}

export const WithIcon: ComponentStoryObj<typeof WidgetFab> = {
  name: "Icon",
  args: {
    widgetConfig: {
      fabType: "ICON",
      fabIcon: "",
    },
  },
}
