import { FoodHelper } from '../helpers/food-model-helper'
import { FoodModel } from '../models/food-model'

describe('Intance of FoodModel', () => {
  test('should ', () => {
    const food = {
      name: 'Hamburguesa Hood',
      description: 'Carne 180g, cheddar, panceta, huevo frito',
      price: 550
    }

    const model = new FoodModel(food)

    expect(model.getName()).toEqual(food.name)
    expect(model.getDescription()).toEqual(food.description)
    expect(model.getPrice()).toEqual(food.price)
  })

  test('Food helper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(foodHelper)
  })
})
