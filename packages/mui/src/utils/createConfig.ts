import { Config, WidgetEnvironment } from "@knockr/client"

type Props = {
  projectId: string
  baseURL?: string | null
  environment?: WidgetEnvironment | null
}

export const createConfig = (props: Props): Config => {
  return {
    projectId: props.projectId,
    baseURL: props.baseURL ?? "https://knocker.app/api",
    environment: props.environment ?? "PRODUCTION",
  }
}
