import { Box } from "@mui/material"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { NockerCanvas } from "../components"

export default {
  title: "NockerCanvas",
  component: NockerCanvas,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NockerCanvas>

export const Default: ComponentStoryObj<typeof NockerCanvas> = {
  storyName: "NockerCanvas",
  args: {
    width: 400,
    height: 400,
  },
  render(args) {
    return (
      <Box sx={{ width: args.width, height: args.height, background: "white" }}>
        <NockerCanvas {...args} />
      </Box>
    )
  },
}
