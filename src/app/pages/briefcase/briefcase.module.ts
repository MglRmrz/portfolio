import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefcaseRoutingModule } from './briefcase-routing.module';
import { BriefcaseComponent } from './briefcase.component';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WhatIDoCardComponent } from './components/what-ido-card/what-ido-card.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AchievementsCardComponent } from './components/achievements-card/achievements-card.component';


@NgModule({
  declarations: [BriefcaseComponent, HomeComponent, AboutComponent, SkillsComponent, WhatIDoCardComponent, AchievementsComponent, AchievementsCardComponent],
  imports: [
    CommonModule,
    BriefcaseRoutingModule,
    SharedModule
  ]
})
export class BriefcaseModule { }
