import { HTTPRequest, HTTPResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HTTPRequest): HTTPResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('The name is required')
      }
    }

    if (!httpRequest.body.model) {
      return {
        statusCode: 400,
        body: new Error('The model is required')
      }
    }

    if (!httpRequest.body.year) {
      return {
        statusCode: 400,
        body: new Error('The year is required')
      }
    }
  }
}
