import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "interfaces/hero";
import { HEROES } from "assets/mock-heroes";

import { MessageService } from "./message";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
