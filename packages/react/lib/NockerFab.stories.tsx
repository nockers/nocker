import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerFab } from "./NockerFab"

export default {
  title: "NockerFab",
  component: NockerFab,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
} as ComponentMeta<typeof NockerFab>

export const Default: ComponentStoryObj<typeof NockerFab> = {
  name: "Default",
  args: {
    widgetConfig: {
      fabText: null,
      fabIcon: null,
    },
  },
}

export const WithText: ComponentStoryObj<typeof NockerFab> = {
  name: "Text",
  args: {
    widgetConfig: {
      fabText: "このページは役に立ちましたか？",
    },
  },
}

export const WithIcon: ComponentStoryObj<typeof NockerFab> = {
  name: "Icon",
  args: {
    widgetConfig: {
      fabIcon: "",
    },
  },
}
