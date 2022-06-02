import { Box } from "@mui/material"
import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { NockerFab } from "./NockerFab"

export default {
  title: "NockerFab",
  component: NockerFab,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as ComponentMeta<typeof NockerFab>

export const Default: ComponentStoryObj<typeof NockerFab> = {
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
