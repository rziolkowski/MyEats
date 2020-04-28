import { AgmCoreModule } from "@agm/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './home/map/map.component';
import { RestaurantContainerComponent } from './home/restaurantContainer/restaurantContainer.component';
import { RestaurantContainerService } from './home/services/restaurantContainer.service'
import { FilterContainerComponent } from './home/filterContainer/filterContainer.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, RoutingModule, AgmCoreModule.forRoot({apiKey: 'AIzaSyAEU5775h5usxBZTtjiROet4ZoRsqk_PbE'}), HttpClientModule ],
  declarations: [ AppComponent, HomeComponent, MapComponent, RestaurantContainerComponent, FilterContainerComponent, LoginComponent, StatsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [RestaurantContainerService]
})
export class AppModule { }