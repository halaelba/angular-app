export default class Location {
  private _lat: number;
  private _lng: number;

  constructor(location: number[]) {
    this._lat = location[0];
    this._lng = location[1];
  }

  public get lat(): number {
    return this._lat;
  }

  public get lng(): number {
    return this._lng;
  }
}
