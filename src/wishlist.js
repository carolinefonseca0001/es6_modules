import { Car } from "./car";

class wishList {
  constructor(list, nextID) {
    this.list = [];
    this.nextID = 0;
  }
}

function add(make, model, year) {
  let car = new Car(this.nextId++, make, model, year);
  this.list.push(car);
}

function remove(carID) {
  this.list = this.list.filter((car) => car.id != carId);
}

export default wishList;
