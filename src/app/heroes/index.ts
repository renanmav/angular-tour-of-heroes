import { Component, OnInit } from "@angular/core";

import { Hero } from "interfaces/hero";
import { HeroService } from "services/hero";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.html",
  styleUrls: ["./heroes.scss"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
