import { Environment } from "@nocker/core"
import { StoreDefault } from "../storeDefault"

export type Config = {
  projectId: string
  environment?: Environment | null
  baseURL?: string | null
  store?: StoreDefault
}
