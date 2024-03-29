import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { Hero } from "interfaces/hero";
import { HeroService } from "services/hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.html",
  styleUrls: ["./hero-detail.scss"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");

    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
}
