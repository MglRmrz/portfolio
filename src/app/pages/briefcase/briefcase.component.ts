import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SkillsService } from '@core/services/skills.service';
import { MSkill } from '@core/models/skill.model';
import { ProjectsService } from '@core/services/projects.service';
import { MProject } from '@core/models/project.model';
import { EmailService } from '@core/services/email.service';
import { IUserContact } from './components/contact/contact.component';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss']
})
export class BriefcaseComponent implements OnInit {

  skills: MSkill[];
  projects: MProject[];
  successSend: boolean = false;
  loadingSendEmail: boolean = false;

  constructor(private _skills: SkillsService, private _projects: ProjectsService,
  private _email: EmailService) { }

  ngOnInit(): void {
    this.petitions();
  }

  sendEmail({email, message, name, subject}: IUserContact): void {
    this.loadingSendEmail = true;
    this._email.sendEmail(name.trim(), subject.trim(), email.trim().toLowerCase(), message.trim(), 'en')
    .subscribe(resp => {
      if (resp.success) {
        this.successSend = true;
        this.loadingSendEmail = false;
      }
    }, err => {
      console.error(err);
      this.loadingSendEmail = false;
    })
  }

  async petitions(): Promise<void> {
    const skillsPromise = this._skills.getSkills();
    const projetcsPromise = this._projects.getProjects();

    const [skillsResult, projectsResult] = await Promise.all([skillsPromise, projetcsPromise]);

    this.skills = skillsResult;
    this.projects = projectsResult;
  }

}
