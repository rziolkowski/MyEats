import { Component } from "@angular/core";

@Component({
  selector: 'my-map',
  styleUrls: [ './map.component.css' ],
  styles: ['agm-map { height: 300px; width: 300px; float: right; }'],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType'>
    </agm-map>
  `
})
export class MapComponent {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'hybrid';
}