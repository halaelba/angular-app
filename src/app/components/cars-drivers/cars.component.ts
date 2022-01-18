import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Car } from 'src/app/models/Car.model';
import { Driver } from 'src/app/models/Driver.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];
  drivers: Driver[] = [];
  selectedCar: Car | undefined;
  selectedDriver: Driver | undefined;
  subscription!: Subscription;
  everyFiveSeconds = timer(0, 5000);

  constructor(private carsServie: CarsService) { }

  ngOnInit(): void {
    this.subscription = this.loadCarsSub();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadCarsSub(): Subscription {
    return this.everyFiveSeconds.subscribe(() => {
      this.loadCars();
    });
  }

  loadCars() {
    this.carsServie.LoadCarsData().subscribe(
      (cars: any[]) => {
        this.cars = cars.map((car: any) => new Car(car));
        this.selectedCar && this.onSelectDriver(this.selectedCar.driver.name);
        if (!this.drivers.length) {
          this.drivers = this.cars.map(car => car.driver);
        }
      }
    );
  }

  onSelectDriver(driverName: string) {
    this.selectedCar = this.findByDriverName(this.cars, driverName);
    this.selectedDriver = this.findByDriverName(this.drivers, driverName);
  }

  private findByDriverName(arr: any[] ,name: string) {
    const findValue = name.toLowerCase();
    // Assuming the drivers names are unique values
    return arr.find(op => op.driver?.name?.toLowerCase().includes(findValue) ||
        op.name?.toLowerCase().includes(findValue));
  }
}
