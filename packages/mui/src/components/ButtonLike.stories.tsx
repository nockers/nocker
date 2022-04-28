import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ButtonLike } from "app/core/components/button/ButtonLike"
import React from "react"

const meta: ComponentMeta<typeof ButtonLike> = {
  argTypes: {},
  component: ButtonLike,
  title: "ButtonLike",
}

export default meta

export const Story: ComponentStory<typeof ButtonLike> = (args) => {
  return <ButtonLike {...args} />
}

Story.storyName = "ButtonLike"

Story.args = {}
