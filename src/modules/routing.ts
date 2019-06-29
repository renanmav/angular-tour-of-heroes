import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HeroesComponent } from "app/heroes";
import { DashboardComponent } from "app/dashboard";
import { HeroDetailComponent } from 'app/hero-detail'

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
