import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { NockerEmotionLike } from "./NockerEmotionLike"

export default {
  title: "NockerEmotionLike",
  component: NockerEmotionLike,
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
    hasBorder: { control: "boolean" },
  },
} as ComponentMeta<typeof NockerEmotionLike>

export const Default: ComponentStoryObj<typeof NockerEmotionLike> = {
  storyName: "NockerEmotionLike",
  args: {
    widgetConfig: widgetConfigDefault,
    hasBorder: true,
  },
}
