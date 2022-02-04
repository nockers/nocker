import { WidgetEnvironment } from "../client/types"
import { Config } from "../types"

type Props = {
  projectId?: string
  baseURL?: string
  environment?: WidgetEnvironment
}

export const createConfig = (props: Props = {}): Config => {
  return {
    projectId: props.projectId ?? "xxxxxxxxxxxxxxxxxxxxx",
    baseURL: props.baseURL ?? "https://knocker.app/api",
    environment: props.environment ?? "PRODUCTION",
  }
}
