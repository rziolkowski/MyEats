import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'myeats-home',
  templateUrl: './stats.component.html',
  styleUrls: ['../app.component.css']
})

//proxy server: https://jsonplaceholder.typicode.com/todos/1
export class StatsComponent implements OnInit {
  readonly ROOT_URL = "localhost";

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    console.log("Getting post");
    this.posts = this.http.get(this.ROOT_URL + "/posts?userId=1");
  }

  ngOnInit() {
  }

}