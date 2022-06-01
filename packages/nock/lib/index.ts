import { nock } from "./nock"

type Tuple = [string, any]

const tuples = window.nock?.a ?? []

for (const tuple of tuples) {
  const [method, option = {}] = tuple
  nock(method, option)
}

window.nock = nock

declare global {
  interface Window {
    nock?: { a?: Tuple[] } & ((method: string, option: unknown) => void)
  }
}
