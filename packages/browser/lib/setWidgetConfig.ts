import { WidgetConfig } from "@nocker/mui"
import { InternalState } from "./models"

type Props = WidgetConfig | null

export const setWidgetConfig = async (widgetConfig?: Props) => {
  if (typeof widgetConfig === "undefined" || widgetConfig === null) {
    return null
  }

  const state = new InternalState()

  state.setWidgetConfigLocal(widgetConfig)

  return null
}
