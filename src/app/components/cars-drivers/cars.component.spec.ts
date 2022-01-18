import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Subscription, timer, of } from 'rxjs';
import { Car } from 'src/app/models/Car.model';
import { CarsService } from 'src/app/services/cars.service';

import { CarsComponent } from './cars.component';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test for timer initialized in ngOnInit', fakeAsync(() => {
    const carsService = TestBed.inject(CarsService);
    const data: Car[] = [];
    spyOn(carsService, 'LoadCarsData').and.returnValue(of(data));
    fixture.detectChanges();
    // timer only emits after 0 milliseconds have passed
    expect(carsService.LoadCarsData).toHaveBeenCalledTimes(0);
    tick(0);
    expect(carsService.LoadCarsData).toHaveBeenCalledTimes(1);
    tick(5000);
    expect(carsService.LoadCarsData).toHaveBeenCalledTimes(2);
    // unsubscribe to the timer
    component.subscription.unsubscribe();
  }));

  it('test for isolated timer subscription function', fakeAsync(() => {
    const carsService = TestBed.inject(CarsService);
    const data: Car[] = [];
    spyOn(carsService, 'LoadCarsData').and.returnValue(of(data));
    const newSub: Subscription = component.loadCarsSub();
    expect(carsService.LoadCarsData).toHaveBeenCalledTimes(0);
    tick(0);
    expect(carsService.LoadCarsData).toHaveBeenCalledTimes(1);
    tick(5000);
    expect(carsService.LoadCarsData).toHaveBeenCalledTimes(2);
    // unsubscribe to the timer inside the fakeAsync zone
    newSub.unsubscribe();
  }));

});
