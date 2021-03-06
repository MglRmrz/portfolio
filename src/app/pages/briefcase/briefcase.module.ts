import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { BriefcaseRoutingModule } from "./briefcase-routing.module";
import { BriefcaseComponent } from "./briefcase.component";
import { SharedModule } from "@shared/shared.module";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { WhatIDoCardComponent } from "./components/what-ido-card/what-ido-card.component";
import { AchievementsComponent } from "./components/achievements/achievements.component";
import { AchievementsCardComponent } from "./components/achievements-card/achievements-card.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TranslateModule } from "@ngx-translate/core";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    BriefcaseComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WhatIDoCardComponent,
    AchievementsComponent,
    AchievementsCardComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    BriefcaseRoutingModule,
    SharedModule,
    FormsModule,
    TranslateModule,
    SweetAlert2Module,
  ],
})
export class BriefcaseModule {}
