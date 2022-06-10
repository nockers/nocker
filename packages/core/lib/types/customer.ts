import { Environment } from "./environment"

export type Customer = {
  id: string
  projectId: string
  environment: Environment
  userId: string | null
  name: string | null
}
