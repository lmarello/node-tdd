import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingParameter } from '../errors/client-error'

describe('Register Vehicle', () => {
  test('should expect error 400 if the name is not exists', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        model: '350Z',
        yaer: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParameter('name'))
  })

  test('should expect error 400 if the model is not exists', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        yaer: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParameter('model'))
  })

  test('should expect error 400 if the year is not exists', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: '350Z'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParameter('year'))
  })

  test('should expect status 201 when all parameters are send', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: '350Z',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(201)
    expect(httpResponse.body.message).toEqual('Created')
  })
})
