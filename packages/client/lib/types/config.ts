import { StoreDefault } from "../storeDefault"
import { Environment } from "./environment"

export type Config = {
  projectId: string
  environment?: Environment | null
  baseURL?: string | null
  store?: StoreDefault
}
