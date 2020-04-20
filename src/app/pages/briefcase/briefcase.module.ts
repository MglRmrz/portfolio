import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefcaseRoutingModule } from './briefcase-routing.module';
import { BriefcaseComponent } from './briefcase.component';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [BriefcaseComponent, HomeComponent, AboutComponent, SkillsComponent],
  imports: [
    CommonModule,
    BriefcaseRoutingModule,
    SharedModule
  ]
})
export class BriefcaseModule { }
