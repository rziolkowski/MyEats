import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'my-map',
  styleUrls: [ './map.component.css' ],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType' [zoom]='zoom'>
    </agm-map>
  `
})

export class MapComponent implements OnInit{
  mapType = 'hybrid';
  zoom = 15;


 ngOnInit() {
    this.setCurrentLocation();
  }
 
    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
        });
      }
    }
 
}