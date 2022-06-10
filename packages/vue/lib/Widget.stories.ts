import type { StoryObj, Meta } from "@storybook/vue3"
import Widget from "./Widget.vue"

export default {
  title: "NockerWidget",
  component: Widget,
  argTypes: {},
} as Meta

export const Default: StoryObj = {
  name: "NockerWidget",
}
