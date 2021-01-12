import { InvalidArgs } from '../errors/invalid-args'
import { UrlLogin } from '../protocols/http-protocols'

describe('HTTP Protocols and queries', () => {
  test('URL Login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')
    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Query params', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?param1=param1&param2=param2')
    const expectAuth = {
      param1: 'param1',
      param2: 'param2'
    }

    expect(parsedUrl.searchParams.get('param1')).toEqual(expectAuth.param1)
    expect(parsedUrl.searchParams.get('param2')).toEqual(expectAuth.param2)
  })

  test('Invalid URL', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgs('url'))
  })
})
