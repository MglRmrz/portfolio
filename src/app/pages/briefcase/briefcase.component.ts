import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SkillsService } from '@core/services/skills.service';
import { MSkill } from '@core/models/skill.model';
import { ProjectsService } from '@core/services/projects.service';
import { MProject } from '@core/models/project.model';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss']
})
export class BriefcaseComponent implements OnInit {

  skills: MSkill[];
  projects: MProject[];

  constructor(private _skills: SkillsService, private _projects: ProjectsService) { }

  ngOnInit(): void {
    this.petitions();
  }


  async petitions(): Promise<void> {
    const skillsPromise = this._skills.getSkills();
    const projetcsPromise = this._projects.getProjects();

    const [skillsResult, projectsResult] = await Promise.all([skillsPromise, projetcsPromise]);

    this.skills = skillsResult;
    this.projects = projectsResult;
  }

}
