import { Box } from "@mui/material"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { KnockrCanvas } from "../components"

export default {
  title: "KnockrCanvas",
  component: KnockrCanvas,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof KnockrCanvas>

export const Default: ComponentStoryObj<typeof KnockrCanvas> = {
  storyName: "KnockrCanvas",
  args: {
    width: 400,
    height: 400,
  },
  render(args) {
    return (
      <Box sx={{ width: args.width, height: args.height, background: "white" }}>
        <KnockrCanvas {...args} />
      </Box>
    )
  },
}
