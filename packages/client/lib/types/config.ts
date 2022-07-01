import { Environment } from "@nocker/core"
import { StoreDefault } from "../helpers/storeDefault"

export type Config = {
  projectId: string
  environment?: Environment | null
  baseURL?: string | null
  store?: StoreDefault
}
