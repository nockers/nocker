import { login } from "./login"
import { render } from "./render"
import { renderCard } from "./renderCard"
import { renderEmotion } from "./renderEmotion"
import { renderTicket } from "./renderTicket"
import { setTheme } from "./setTheme"
import { setWidgetConfig } from "./setWidgetConfig"

export const nock = (method: string, option: any) => {
  if (method === "login") {
    return login(option)
  }

  if (method === "setTheme") {
    return setTheme(option)
  }

  if (method === "setWidgetConfig") {
    return setWidgetConfig(option)
  }

  if (method === "render") {
    return render(option)
  }

  if (method === "renderCard") {
    return renderCard(option)
  }

  if (method === "renderEmotion") {
    return renderEmotion(option)
  }

  if (method === "renderTicket") {
    return renderTicket(option)
  }
}
