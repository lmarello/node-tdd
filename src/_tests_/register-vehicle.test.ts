import { RegisterVehicle } from '../controllers/register-vehicle'

describe('Register Vehicle', () => {
  test('should expect error 400 if the name is not exists', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: '350Z',
        yaer: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('The name is required'))
  })

  test('should expect error 400 if the model is not exists', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: '350Z',
        yaer: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('The model is required'))
  })

  test('should expect error 400 if the year is not exists', () => {
    const sut = new RegisterVehicle()

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: '350Z'
        // yaer: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('The year is required'))
  })
})
