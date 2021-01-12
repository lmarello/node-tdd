import { RegisterVehicle } from '../controllers/register-vehicle'

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
    expect(httpResponse.body).toEqual(new Error('The property "name" is required'))
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
    expect(httpResponse.body).toEqual(new Error('The property "model" is required'))
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
    expect(httpResponse.body).toEqual(new Error('The property "year" is required'))
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
