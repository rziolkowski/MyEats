import { AgmCoreModule } from "@agm/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RestaurantContainerComponent } from './restaurantContainer/restaurantContainer.component';
import { RestaurantContainerService } from './services/restaurantContainer.service'
import { FilterContainerComponent } from './filterContainer/filterContainer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEU5775h5usxBZTtjiROet4ZoRsqk_PbE'
    }), HttpClientModule
  ],
  declarations: [ AppComponent, MapComponent, RestaurantContainerComponent, FilterContainerComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [RestaurantContainerService]
})
export class AppModule { }