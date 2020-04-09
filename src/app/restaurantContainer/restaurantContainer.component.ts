import { Component, OnInit } from '@angular/core';
import { RestaurantContainerService } from '../services/restaurantContainer.service';
import { RestaurantModel } from '../models/restaurant.model';

@Component({
  selector: 'my-restaurants',
  templateUrl: './restaurantContainer.component.html',
  styleUrls: [ './restaurantContainer.component.css' ]
})
export class RestaurantContainerComponent {
  restaurantArray: RestaurantModel[];
  constructor (
  private restaurantService: RestaurantContainerService
  ) { }

  getRestaurants() {
    this.restaurantService.getRestaurants()
    .subscribe(restaurantArray => this.restaurantArray = restaurantArray)
  }
  ngOnInit() {
    this.getRestaurants()
  }
}