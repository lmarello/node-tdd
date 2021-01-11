import { FoodModel } from '../models/food-model'

describe('Intance of FoodModel', () => {
  test('should ', () => {
    const model = new FoodModel('Hamburguesa Hood', 'Carne 180g, cheddar, panceta, huevo frito', 550)

    expect(model.getName()).toEqual('Hamburguesa Hood')
    expect(model.getDescription()).toEqual('Carne 180g, cheddar, panceta, huevo frito')
    expect(model.getPrice()).toEqual(550)
  })
})
