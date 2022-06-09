import { Environment } from "./environment"
import { Tag } from "./tag"

export type Help = {
  id: string
  projectId: string
  environment: Environment
  title: string
  body: string
  tags: Tag[]
}
