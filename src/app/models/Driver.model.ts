import ICarsApiResponse from './apiResponse/CarsApiResponse.model';
import Person from './Person.model';

const PIC_LINK = 'https://randomuser.me/api/portraits/women/';

// Inheretence
export default class Driver extends Person {
  private _image: string;
  constructor(car: ICarsApiResponse) {
    super(car)
    this._image = PIC_LINK + this.getRandomNumber() + '.jpg';    
  }
 
  public get image(): string {
		return this._image;
	}

  getRandomNumber() {
    return Math.round(Math.random() * 20);
  }
}
