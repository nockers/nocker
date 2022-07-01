import { Environment, Nocker } from "@nocker/client"
import { captureException } from "@sentry/hub"
import { State } from "./models"
import { initSentry } from "./utils"

type Props = {
  projectId: string
  environment?: Environment | null
  baseURL?: string | null
  disableSentry?: boolean
}

export const init = async (props: Props) => {
  if (props.disableSentry !== true) {
    initSentry()
  }

  if (typeof props.projectId === "undefined" || props.projectId === null) {
    throw new Error("projectId is Required")
  }

  const state = new State()

  if (state.isLoggingIn) {
    return null
  }

  const client = new Nocker({
    projectId: props.projectId,
    environment: props.environment,
    baseURL: props.baseURL,
  })

  state.setClient(client)

  state.setLoginState(true)

  try {
    const project = await client.project().read()
    state.setProject(project)
  } catch (error) {
    captureException(error)
  }

  try {
    const login = await client.init()
    if (login !== null) {
      state.setCustomer(login.customer)
    }
  } catch (error) {
    captureException(error)
  }

  state.setLoginState(false)

  return null
}
