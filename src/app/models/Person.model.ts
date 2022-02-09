import ICarsApiResponse from './apiResponse/CarsApiResponse.model';
import Language from './Language.model';

export default abstract class Person {
  private _name: string;
  private _cityOrigin: string;
  private _phone: string;
  private _info: string;
  private _language: Language;

  constructor(car: ICarsApiResponse) {
    this._name = car.driverName;
    this._cityOrigin = car.driverCityOrigin;
    this._phone = car.driverPhone;
    this._info = car.driverInfo;
    this._language = new Language(car.driverLanguage);
  }

  public get name(): string {
    return this._name;
  }

  public get cityOrigin(): string {
    return this._cityOrigin;
  }

  public get phone(): string {
    return this._phone;
  }

  public get info(): string {
    return this._info;
  }

  public set info(info: string) {
     this._info = info;
  }

  public get language(): Language {
    return this._language;
  }
}
