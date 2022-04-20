import fetch from "node-fetch"

const _globalThis = globalThis as any

_globalThis.fetch = fetch
