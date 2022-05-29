import { WidgetConfig } from "@nocker/client"
import { InternalState } from "../internals"

type Props = WidgetConfig | null

export const setWidgetConfig = async (widgetConfig?: Props) => {
  if (typeof widgetConfig === "undefined" || widgetConfig === null) {
    return null
  }

  const state = new InternalState()

  state.setWidgetConfigLocal(widgetConfig)

  return null
}
