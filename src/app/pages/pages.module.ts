import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { WorksComponent } from "./works/works.component";
import { AboutComponent } from "./about/about.component";
import { CareerComponent } from "./career/career.component";
import { HiringComponent } from "./hiring/hiring.component";
import { NeedTeamComponent } from "./need-team/need-team.component";
import { ServicesComponent } from "./services/services.component";
import { FooterComponent, HeaderComponent } from "./components";

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactComponent,
    WorksComponent,
    AboutComponent,
    CareerComponent,
    HiringComponent,
    NeedTeamComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
