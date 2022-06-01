export type RecordToken = {
  id: string
  value: string
  type: "access" | "refresh"
  projectId: string
  environment: string
}
