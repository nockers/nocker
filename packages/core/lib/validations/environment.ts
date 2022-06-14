import { z } from "zod"

export const zEnvironment = z.union([
  z.literal("PRODUCTION"),
  z.literal("STAGING"),
  z.literal("DEVELOPMENT"),
])
