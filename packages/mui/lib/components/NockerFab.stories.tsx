import { Box } from "@mui/material"
import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { NockerFab } from "./NockerFab"

const meta: ComponentMeta<typeof NockerFab> = {
  title: "NockerFab",
  component: NockerFab,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
}

export const Story: ComponentStoryObj<typeof NockerFab> = {
  storyName: "NockerFab",
  args: {
    widgetConfig: widgetConfigDefault,
  },
  render(args) {
    return (
      <>
        <Box
          component={"img"}
          src={"images/background.png"}
          sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}
        />
        <NockerFab {...args} />
      </>
    )
  },
}
