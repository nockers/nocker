import { Environment } from "./environment"

export type Config = {
  projectId: string
  environment?: Environment
  baseURL?: string
}
