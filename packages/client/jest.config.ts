import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest",
  },
}

export default config
