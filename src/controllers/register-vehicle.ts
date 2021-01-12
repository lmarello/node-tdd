import { HTTPRequest, HTTPResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HTTPRequest): HTTPResponse {
    const requiredProperties = ['name', 'model', 'year']

    for (const prop of requiredProperties) {
      if (!httpRequest.body[prop]) {
        return {
          statusCode: 400,
          body: new Error(`The property "${prop}" is required`)
        }
      }
    }

    return {
      statusCode: 201,
      body: {
        message: 'Created'
      }
    }
  }
}
