import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Post } from "../post"

@Component({
  selector: 'myeats-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

//proxy server: https://jsonplaceholder.typicode.com/todos/1
export class LoginComponent implements OnInit {
  readonly ROOT_URL = "localhost";

  username: Observable<any>;

  constructor(private http: HttpClient) { }

  logButtonClicked() {
    //send some data to the server
    //data to be sent over

    var username = document.getElementById("loginUser").value;

    console.log(username)

    this.http.post<any>('localhost', {title: 'username'}).subscribe(data => {
      this.postUser = username;
    })
  }

  ngOnInit() {
  }

}
