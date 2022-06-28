import "tailwindcss/tailwind.css"
export { ConfigContext as ConfigContext } from "./contexts"
export {
  useEmotionText,
  useMutationEmotion,
  useMutationTicket,
  useWidgetConfig,
} from "./hooks"
export type { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"
export { NockerProvider } from "./NockerProvider"
export { Widget } from "./Widget"
export { WidgetEmotion } from "./WidgetEmotion"
export { WidgetEmotionHand } from "./WidgetEmotionHand"
export { WidgetFab } from "./WidgetFab"
export { WidgetTicket } from "./WidgetTicket"
