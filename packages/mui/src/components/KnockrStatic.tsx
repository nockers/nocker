import React, { useContext, VFC } from "react"
import { WidgetContext } from "../contexts"
import { KnockrStaticCard } from "./KnockrStaticCard"

export const KnockrStatic: VFC = (props) => {
  const widget = useContext(WidgetContext)

  return <KnockrStaticCard helps={widget.helps} />
}
