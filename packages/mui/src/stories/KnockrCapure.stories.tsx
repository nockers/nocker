import { Box } from "@mui/material"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrCapure } from "../components/KnockrCapure"

const meta: ComponentMeta<typeof KnockrCapure> = {
  title: "KnockrCapure",
  component: KnockrCapure,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrCapure> = (args) => {
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
}

Story.storyName = "KnockrCapure"

Story.args = {}
