export class VehicleModel {
  constructor (private readonly name: string, private readonly model: string, private readonly year: number) {
    this.name = name
    this.model = model
    this.year = year
  }

  getName (): string {
    return this.name
  }

  getModel (): string {
    return this.model
  }

  getYear (): number {
    return this.year
  }
}
