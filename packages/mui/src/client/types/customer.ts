import type { Environment } from "integrations/libraries/client/types"

export type Customer = {
  id: string
  environment: Environment
  externalId: string | null
  name: string | null
  projectId: string
}
