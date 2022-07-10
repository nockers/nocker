export class UnauthorizedError extends Error {
  readonly name: string

  /**
   * https://stackoverflow.com/questions/30402287/extended-errors-do-not-have-message-or-stack-trace
   */
  readonly __proto__: UnauthorizedError

  constructor(message?: string) {
    const prototype = new.target.prototype
    super(message)
    this.__proto__ = prototype
    this.name = "UNATHORIZED_ERROR"
  }
}
