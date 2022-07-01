import { nocker } from "@nocker/browser"

export const nock = (method: string, option: never) => {
  if (method === "init") {
    return nocker.init(option)
  }

  if (method === "setTheme") {
    return nocker.setTheme(option)
  }

  if (method === "setWidgetConfig") {
    return nocker.setWidgetConfig(option)
  }

  if (method === "renderWidget") {
    return nocker.renderWidget(option)
  }

  if (method === "renderWidgetEmotion") {
    return nocker.renderWidgetEmotion(option)
  }

  if (method === "renderWidgetFab") {
    return nocker.renderWidgetFab(option)
  }

  if (method === "renderWidgetTicket") {
    return nocker.renderWidgetTicket(option)
  }
}
