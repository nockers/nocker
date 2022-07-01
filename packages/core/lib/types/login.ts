import { Customer } from "./customer"

export type Login = {
  projectId: string
  customer: Customer
  accessToken: string | null
  refreshToken: string | null
}
