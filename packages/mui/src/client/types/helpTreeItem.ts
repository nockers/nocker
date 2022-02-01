import type { Help } from "./help"
import type { HelpCategory } from "./helpCategory"

export type HelpSubCategory = HelpCategory & {
  children: Help[]
}

export type HelpTreeItem = HelpCategory & {
  children: (HelpSubCategory | Help)[]
}
