export class MissingParameter extends Error {
  constructor (public name: string) {
    super(`Expected parameter "${name}"`)
  }
}
