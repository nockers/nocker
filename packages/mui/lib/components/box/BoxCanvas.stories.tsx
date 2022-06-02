import { Box } from "@mui/material"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { BoxCanvas } from "./BoxCanvas"

export default {
  title: "BoxCanvas",
  component: BoxCanvas,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BoxCanvas>

export const Default: ComponentStoryObj<typeof BoxCanvas> = {
  storyName: "BoxCanvas",
  args: {
    width: 400,
    height: 400,
  },
  render(args) {
    return (
      <Box sx={{ width: args.width, height: args.height, background: "white" }}>
        <BoxCanvas {...args} />
      </Box>
    )
  },
}
