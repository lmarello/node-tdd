import { URL } from 'url'
import { InvalidArgs } from '../errors/invalid-args'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UrlLogin {
  static parseUrl (url: string): URL {
    try {
      return new URL(url)
    } catch (error) {
      throw new InvalidArgs('url')
    }
  }
}
