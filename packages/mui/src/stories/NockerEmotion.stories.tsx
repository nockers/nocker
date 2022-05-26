import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerEmotion } from "../components"

export default {
  title: "NockerEmotion",
  component: NockerEmotion,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    isStandalone: { control: "boolean" },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof NockerEmotion>

export const Default: ComponentStoryObj<typeof NockerEmotion> = {
  storyName: "NockerEmotion",
  args: {
    widgetConfig: widgetConfigDefault,
    isStandalone: true,
    hasBorder: true,
  },
}
