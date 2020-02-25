import { AgmCoreModule } from "@agm/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEU5775h5usxBZTtjiROet4ZoRsqk_PbE'
    })
  ],
  declarations: [ AppComponent, MapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
