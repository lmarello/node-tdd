import { URL } from 'url'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UrlLogin {
  static parseUrl (url: string): URL {
    return new URL(url)
  }
}
