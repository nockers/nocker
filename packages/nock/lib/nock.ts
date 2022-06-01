import { nocker } from "@nocker/browser"

export const nock = (method: string, option: any) => {
  if (method === "login") {
    return nocker.login(option)
  }

  if (method === "setTheme") {
    return nocker.setTheme(option)
  }

  if (method === "setWidgetConfig") {
    return nocker.setWidgetConfig(option)
  }

  if (method === "render") {
    return nocker.render(option)
  }

  if (method === "renderCard") {
    return nocker.renderCard(option)
  }

  if (method === "renderEmotion") {
    return nocker.renderEmotion(option)
  }

  if (method === "renderTicket") {
    return nocker.renderTicket(option)
  }
}
