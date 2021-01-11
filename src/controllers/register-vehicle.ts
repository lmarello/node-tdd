export class RegisterVehicle {
  handle (httpRequest: any): any {
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
