import { WidgetConfig } from "@nocker/mui"
import { State } from "./models"

type Props = Partial<WidgetConfig> | null

export const setWidgetConfig = async (widgetConfig?: Props) => {
  if (typeof widgetConfig === "undefined" || widgetConfig === null) {
    return null
  }

  const state = new State()

  state.setWidgetConfigOverride(widgetConfig)

  return null
}
