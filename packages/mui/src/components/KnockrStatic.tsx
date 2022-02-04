import React, { useContext, VFC } from "react"
import { WidgetContext } from "../contexts"
import { KnockrStaticCard } from "./KnockrStaticCard"

type Props = {
  projectId: string
}

export const KnockrStatic: VFC<Props> = (props) => {
  const widget = useContext(WidgetContext)

  return (
    <KnockrStaticCard
      projectId={props.projectId}
      helpTreeItems={widget.helpTreeItems}
    />
  )
}
