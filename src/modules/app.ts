import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "modules/routing";
import { AppComponent } from "app";
import { HeroesComponent } from "app/heroes";
import { HeroDetailComponent } from "app/hero-detail";
import { MessagesComponent } from "app/messages";
import { DashboardComponent } from "app/dashboard";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
