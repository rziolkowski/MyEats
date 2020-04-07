import { Component, OnInit } from '@angular/core';
import { RestaurantContainerService } from '../services/restaurantContainer.service';
import { RestaurantModel } from '../models/restaurant.model';

@Component({
  selector: 'my-restaurants',
  templateUrl: './restaurantContainer.component.html',
  styleUrls: [ './restaurantContainer.component.css' ]
})
export class RestaurantContainerComponent {
  private restaurantArray: RestaurantModel[];
  private restaurantService: RestaurantContainerService
  ngOnInit() {
    this.restaurantArray = this.restaurantService.getRestaurants();
  }
  restaurant;
}