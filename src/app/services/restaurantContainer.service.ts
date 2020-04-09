import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantModel } from '../models/restaurant.model';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class RestaurantContainerService {
  private restaurantURL: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get<RestaurantModel[]>(this.restaurantURL);
  }
}