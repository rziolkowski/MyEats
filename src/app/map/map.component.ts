import { Component } from "@angular/core";

@Component({
  selector: 'my-map',
  styleUrls: [ './map.component.css' ],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType' [zoom]='zoom'>
    </agm-map>
  `
})

export class MapComponent {
  latitude = 41.773671;
  longitude =  -88.142937;
  mapType = 'hybrid';
  zoom = 15;
}