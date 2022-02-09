import { Component, Input, OnInit } from '@angular/core';
import  Car  from 'src/app/models/Car.model';
import  Driver  from 'src/app/models/Driver.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() selectedCar: Car | undefined;
  @Input() selectedDriver: Driver | undefined;

  constructor() { }

  ngOnInit(): void { }

}
