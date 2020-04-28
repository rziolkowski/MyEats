// enable routing //
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import components //
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';

// declare const variable for routing //
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'stats' , component : StatsComponent },
  { path: '**' , component:HomeComponent }
];

// create for.routing and export //
 @NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {}