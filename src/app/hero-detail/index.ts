import { Component, OnInit, Input } from "@angular/core";

import { Hero } from "interfaces/hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.html",
  styleUrls: ["./hero-detail.scss"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {}

  ngOnInit() {}
}
