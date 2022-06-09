import { Box } from "@mui/material"
import { widgetConfigDefault } from "@nocker/client"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import React from "react"
import { WidgetFab } from "./WidgetFab"

export default {
  title: "WidgetFab",
  component: WidgetFab,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as ComponentMeta<typeof WidgetFab>

export const Default: ComponentStoryObj<typeof WidgetFab> = {
  name: "WidgetFab",
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
        <WidgetFab {...args} />
      </>
    )
  },
}
