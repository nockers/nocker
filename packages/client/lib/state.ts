export class State {
  static isBooted = false

  get isBooted() {
    return State.isBooted
  }

  boot() {
    State.isBooted = true
  }
}
