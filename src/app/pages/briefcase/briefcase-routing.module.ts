import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BriefcaseComponent } from './briefcase.component';


const routes: Routes = [
  {path: '', component: BriefcaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BriefcaseRoutingModule { }
