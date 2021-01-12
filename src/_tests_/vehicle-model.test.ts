import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { VehicleModel } from '../models/vehicle-model'

describe('Intance of VehicleModel', () => {
  test('should ', () => {
    const vehicle = {
      name: 'Peugeot',
      model: '308',
      year: 2021,
      price: 2000000
    }

    const model = new VehicleModel(vehicle)

    expect(model.getName()).toEqual(vehicle.name)
    expect(model.getModel()).toEqual(vehicle.model)
    expect(model.getYear()).toEqual(vehicle.year)
    expect(model.getPrice()).toEqual(vehicle.price)
  })

  test('Vehicle helper', () => {
    const vehicleHelper = new VehicleHelper()
    expect(vehicleHelper).toEqual(vehicleHelper)
  })
})
