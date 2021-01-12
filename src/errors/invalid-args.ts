export class InvalidArgs extends Error {
  constructor (public arg: string) {
    super(`Invalid argument: "${arg}"`)
  }
}
