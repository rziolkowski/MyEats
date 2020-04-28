import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'my-map',
  styleUrls: [ './map.component.css' ],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType' [zoom]='zoom' (mapClick)="addMarker($event.coords.lat, $event.coords.lng)">
      <agm-marker
        [latitude]="marker.lat"
        [longitude]="marker.lng"
        [opacity]="marker.alpha"
        [markerDraggable]="true"
        (markerClick)="selectMarker($event)"
      >
      </agm-marker>
    </agm-map>
  `
})

export class MapComponent implements OnInit{
  mapType = 'hybrid';
  zoom = 15;
  selectedMarker;
  marker;
  latitude = 41.7727;
  longitude = 88.1440;

  addMarker(lat: number, lng: number) {
    this.marker = { lat, lng, alpha: 0.4 };
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

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
        this.marker = { lat: this.latitude, lng: this.longitude, alpha: 0.4 }
      });
    }
  }
}