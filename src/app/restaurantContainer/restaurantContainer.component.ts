import { Component } from '@angular/core';

@Component({
  selector: 'my-restaurants',
  templateUrl: './restaurantContainer.component.html',
  styleUrls: [ './restaurantContainer.component.css' ]
})
export class RestaurantContainerComponent {
  restaurantArray=[{name: "Noodles and Company", cuisine: "Pasta", website:"https://www.noodles.com/"}, {name: "Five Guys", cuisine: "Burgers", website:"https://www.fiveguys.com/"}, {name: "Chipotle", cuisine: "Mexican", website:"https://www.chipotle.com/"}, {name: "Noodles and Company", cuisine: "Pasta", website:"https://www.noodles.com/"}, {name: "Five Guys", cuisine: "Burgers", website:"https://www.fiveguys.com/"}, {name: "Chipotle", cuisine: "Mexican", website:"https://www.chipotle.com/"}, {name: "Noodles and Company", cuisine: "Pasta", website:"https://www.noodles.com/"}, {name: "Five Guys", cuisine: "Burgers", website:"https://www.fiveguys.com/"}, {name: "Chipotle", cuisine: "Mexican", website:"https://www.chipotle.com/"}, {name: "Noodles and Company", cuisine: "Pasta", website:"https://www.noodles.com/"}, {name: "Five Guys", cuisine: "Burgers", website:"https://www.fiveguys.com/"}, {name: "Chipotle", cuisine: "Mexican", website:"https://www.chipotle.com/"}];
  restaurant;
}