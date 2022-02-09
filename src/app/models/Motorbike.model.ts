import ICarsApiResponse from './apiResponse/CarsApiResponse.model';
import Vehicle from './vehicle.model';

export default class Motorbike extends Vehicle {
    constructor(car: ICarsApiResponse) {
        super(car);
    }

    protected needsRepair(): boolean {
        return this.kmDriven >= 300;
    }

    public changeDriverInfo(driverInfo: string): void {
        this.driver.info = driverInfo;
    }
}