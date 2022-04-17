import { Box } from "@mui/material"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCanvas } from "../components"

const meta: ComponentMeta<typeof KnockrCanvas> = {
  title: "KnockrCanvas",
  component: KnockrCanvas,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrCanvas> = (args) => {
  return (
    <Box sx={{ width: args.width, height: args.height, background: "white" }}>
      <KnockrCanvas {...args} />
    </Box>
  )
}

Story.storyName = "KnockrCanvas"

Story.args = {
  width: 400,
  height: 400,
}
