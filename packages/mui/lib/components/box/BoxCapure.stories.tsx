import { Box } from "@mui/material"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { BoxCapure } from "./BoxCapure"

export default {
  title: "BoxCapure",
  component: BoxCapure,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BoxCapure>

export const Default: ComponentStoryObj<typeof BoxCapure> = {
  storyName: "BoxCapure",
  args: {},
  render(args) {
    return (
      <>
        <Box
          component={"img"}
          src={"images/background.png"}
          sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
        <BoxCapure {...args} />
      </>
    )
  },
}
