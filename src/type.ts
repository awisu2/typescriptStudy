// type
var i: number = 1
console.log(i)

// insterface
interface NamePlate {
  name: string
  size?: number // ?で省略可能
}
var myPlate: NamePlate = {
  name: "abc",
  size: 123
}
var myPlate: NamePlate = {
  name: "zyx"
}

// generics
interface Diner<A, B, C> {
  material: A
  tools: B
  volume: C
}
var thisDiner: Diner<string, string, number> = {
  material: 'honey',
  tools: 'hand',
  volume: 1
}

// class
class Car {
  private name: string

  constructor(name: string) {
    this.name = name

  }

  drive(): string {
    return this.name + ' blooom!!'
  }
}
let mycar = new Car('RedCar')
console.log(mycar.drive())
