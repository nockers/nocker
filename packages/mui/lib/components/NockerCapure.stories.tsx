import { Box } from "@mui/material"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { NockerCapure } from "./NockerCapure"

export default {
  title: "NockerCapure",
  component: NockerCapure,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NockerCapure>

export const Default: ComponentStoryObj<typeof NockerCapure> = {
  storyName: "NockerCapure",
  args: {},
  render(args) {
    return (
      <>
        <Box
          component={"img"}
          src={"images/background.png"}
          sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
        <NockerCapure {...args} />
      </>
    )
  },
}
