import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantModel } from '../models/restaurant.model';

@Injectable()
export class RestaurantContainerService {
  private restaurantURL: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get<RestaurantModel[]>(this.restaurantURL)
  }
}