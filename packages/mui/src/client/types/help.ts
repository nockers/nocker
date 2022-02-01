import type { Environment } from "integrations/libraries/client/types"

export type Help = {
  id: string
  title: string
  body: { [key in string]?: any }
  categoryId: string
  projectId: string
  environment: Environment
}
