import { VehicleModel } from '../models/vehicle-model'
describe('Intance of VehicleModel', () => {
  test('should ', () => {
    const model = new VehicleModel('Nissan', '350Z', 2020)

    expect(model.getName()).toEqual('Nissan')
    expect(model.getModel()).toEqual('350Z')
    expect(model.getYear()).toEqual(2020)
  })
})
