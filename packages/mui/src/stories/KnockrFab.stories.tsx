import { widgetConfigDefault } from "@knockr/client"
import { Box } from "@mui/material"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { KnockrFab } from "../components"

const meta: ComponentMeta<typeof KnockrFab> = {
  title: "KnockrFab",
  component: KnockrFab,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    pagePath: { table: { disable: true } },
    pageTitle: { table: { disable: true } },
  },
}

export default meta

export const Story: ComponentStory<typeof KnockrFab> = (args) => {
  return (
    <>
      <Box
        component={"img"}
        src={"images/background.png"}
        sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      />
      <KnockrFab {...args} />
    </>
  )
}

Story.storyName = "KnockrFab"

Story.args = {
  widgetConfig: widgetConfigDefault,
}
