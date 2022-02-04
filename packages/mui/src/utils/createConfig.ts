import { Config, WidgetEnvironment } from "../types"

type Props = {
  projectId?: string
  baseURL?: string
  environment?: WidgetEnvironment
}

export const createConfig = (props: Props = {}): Config => {
  return {
    projectId: props.projectId ?? "xxxxxxxxxxxxxxxxxxxxx",
    baseURL: props.baseURL ?? "https://Knockr.app/api",
    environment: props.environment ?? "PRODUCTION",
  }
}
