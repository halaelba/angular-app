import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmCoreModule } from '@agm/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars-drivers/cars.component';
import { CarsService } from './services/cars.service';
import { environment } from 'src/environments/environment';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
    AgmSnazzyInfoWindowModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatExpansionModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
