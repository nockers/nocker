import React, { useContext, VFC } from "react"
import { WidgetContext } from "../contexts"
import { KnockerStaticCard } from "./KnockerStaticCard"

type Props = {
  projectId: string
}

export const KnockerStatic: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  return (
    <KnockerStaticCard
      projectId={props.projectId}
      helpTreeItems={widget.helpTreeItems}
    />
  )
}
