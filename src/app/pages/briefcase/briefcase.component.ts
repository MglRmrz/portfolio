import { Component, OnInit } from '@angular/core';
import { SkillsService } from '@core/services/skills.service';
import { MSkill } from '@core/models/skill.model';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss']
})
export class BriefcaseComponent implements OnInit {

  skills: MSkill[] = [];

  constructor(private _skills: SkillsService) { }

  ngOnInit(): void {
    this._skills.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

}
