import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerEmotionHand } from "./NockerEmotionHand"

export default {
  title: "NockerEmotionHand",
  component: NockerEmotionHand,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof NockerEmotionHand>

export const Default: ComponentStoryObj<typeof NockerEmotionHand> = {
  storyName: "NockerEmotionHand",
  args: {
    widgetConfig: widgetConfigDefault,
    hasBorder: true,
  },
}
