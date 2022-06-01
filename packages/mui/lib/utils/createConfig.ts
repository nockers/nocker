import { Config, WidgetEnvironment } from "@nocker/client"

type Props = {
  projectId: string
  baseURL?: string | null
  environment?: WidgetEnvironment | null
}

export const createConfig = (props: Props): Config => {
  return {
    projectId: props.projectId,
    environment: props.environment ?? "PRODUCTION",
    baseURL: props.baseURL ?? "https://nocker.app/api",
  }
}