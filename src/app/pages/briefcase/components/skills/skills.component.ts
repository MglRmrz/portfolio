import { Component, OnInit, Input } from '@angular/core';
import { MSkill } from '@core/models/skill.model';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: MSkill[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
    
  }

}
