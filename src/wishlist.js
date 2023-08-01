import { Car } from "./car";

class wishList {
  constructor(list, nextid) {
    this.list = [];
    this.nextid = 0;
  }
  add(make, model, year) {
    let car = new Car(this.nextid++, make, model, year);
    this.list.push(car);
  }

  remove(carid) {
    this.list = this.list.filter((car) => car.id != carid);
  }
}

export default wishList;
