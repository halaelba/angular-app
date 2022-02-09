import ICarsApiResponse from './apiResponse/CarsApiResponse.model';
import Driver from './Driver.model';
import Location from './Location.model';

export default abstract class Vehicle {
    protected _factoryName: string;
    protected _kmDriven: number;
    protected _location: Location;
    protected _driver: Driver;
    
    constructor(car: ICarsApiResponse) {        
        this._factoryName = car.carMake;
        this._kmDriven = car.kmDriven ;
        this._location = new Location(car.location);
        this._driver = new Driver(car);
    }

    protected abstract needsRepair(): boolean;
    protected abstract changeDriverInfo(driverInfo: string): void;

    public get factoryName(): string {
        return this._factoryName;
    }
    
    public get kmDriven(): number {
        return this._kmDriven;
    }
    
    public get location(): Location {
        return this._location;
    }
    
    public get driver(): Driver {
        return this._driver;
    }

    public set driver(driver: Driver) {
        this._driver = driver;
    }
}