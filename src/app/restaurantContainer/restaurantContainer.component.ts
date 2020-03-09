import { Component } from '@angular/core';

@Component({
  selector: 'my-restaurants',
  templateUrl: './restaurantContainer.component.html',
  styleUrls: [ './restaurantContainer.component.css' ]
})
export class RestaurantContainerComponent {
  restaurantArray=["Pizza", "Soup", "Burger"];
  restaurant;

  addRestaurant(value){

  }
}