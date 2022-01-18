export class Location {
  lat: number;
  lng: number;

  constructor(location: number[]) {
    this.lat = location[0];
    this.lng = location[1];
  }
}
