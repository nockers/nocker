import type { Environment } from "integrations/libraries/client/types"

export type HelpCategory = {
  id: string
  name: string
  parentCategoryId: string
  projectId: string
  environment: Environment
}
