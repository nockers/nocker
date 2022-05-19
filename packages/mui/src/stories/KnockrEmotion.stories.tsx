import { widgetConfigDefault } from "@knockr/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { KnockrEmotion } from "../components"

export default {
  title: "KnockrEmotion",
  component: KnockrEmotion,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isStandalone: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof KnockrEmotion>

export const Default: ComponentStoryObj<typeof KnockrEmotion> = {
  storyName: "KnockrEmotion",
  args: {
    widgetConfig: widgetConfigDefault,
    isStandalone: true,
    hasBorder: true,
  },
}
