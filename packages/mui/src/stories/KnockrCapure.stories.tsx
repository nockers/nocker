import { Box } from "@mui/material"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { KnockrCapure } from "../components"

export default {
  title: "KnockrCapure",
  component: KnockrCapure,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof KnockrCapure>

export const Default: ComponentStoryObj<typeof KnockrCapure> = {
  storyName: "KnockrCapure",
  args: {},
  render(args) {
    return (
      <>
        <Box
          component={"img"}
          src={"images/background.png"}
          sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
        <KnockrCapure {...args} />
      </>
    )
  },
}
