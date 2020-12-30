import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CareerComponent } from "./career/career.component";
import { ContactComponent } from "./contact/contact.component";
import { HiringComponent } from "./hiring/hiring.component";
import { HomeComponent } from "./home/home.component";
import { NeedTeamComponent } from "./need-team/need-team.component";

import { PagesComponent } from "./pages.component";
import { ServicesComponent } from "./services/services.component";
import { WorksComponent } from "./works/works.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "career", component: CareerComponent },
  { path: "contact", component: ContactComponent },
  { path: "need-team", component: NeedTeamComponent },
  { path: "hiring", component: HiringComponent },
  { path: "works", component: WorksComponent },
  { path: "services", component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
