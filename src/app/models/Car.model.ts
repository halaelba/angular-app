import ICarsApiResponse from './apiResponse/CarsApiResponse.model';
import Driver from './Driver.model';
import Vehicle from './vehicle.model';

// Inheritence
export default class Car extends Vehicle {
  private _window: string;

  constructor(car: ICarsApiResponse) {
     super(car);
     this._window = 'Glass';
  }

  // Encapsulation
  public get window(): string {
    return this._window;
  }

  // Polymorphism
  protected needsRepair(): boolean {
    return this.kmDriven >= 200;
  }

  public changeDriverInfo(driverInfo: string): void {
    this.driver.info = driverInfo;
  }

  // Abstraction
  public changeDrive(name: string, phone: string): void {
    const driver = {
      driverName: name,
      driverPhone: phone      
    } as ICarsApiResponse;
    const _driver = new Driver(driver);
    this.driver = _driver;    
  }
}
