import { Component, OnInit } from "@angular/core";

import { Hero } from "interfaces/hero";
import { HeroService } from "services/hero";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.html",
  styleUrls: ["./dashboard.scss"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}
