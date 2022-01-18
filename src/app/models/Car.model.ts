import { Driver } from './Driver.model';
import { Location } from './Location.model';

export class Car {
  carMake: string;
  kmDriven: number;
  location: Location;
  driver: Driver;

  constructor(car: any) {
    this.carMake = car.carMake;
    this.kmDriven = car.kmDriven;
    this.location = new Location(car.location);
    this.driver = new Driver(car.driverName, car.driverCityOrigin, car.driverPhone,
      car.driverGender, car.driverInfo, car.driverLanguage);
  }
}
