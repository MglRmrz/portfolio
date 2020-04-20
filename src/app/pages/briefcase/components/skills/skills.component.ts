import { Component, OnInit, Input } from '@angular/core';
import { MSkill } from '@core/models/skill.model';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: MSkill[];

  whatIDo: WhatIDo[] = [
    {
      title: 'Desarrollo Web',
      icon: './assets/icons/web-development.svg',
      content: [
        'Diseño Web adaptable', 
        'Desarrollo Frontend', 
        'Desarrollo Backend', 
        'Integración con API REST'
      ]
    },
    {
      title: 'Desarrollo Android',
      icon: './assets/icons/android.svg',
      content: [
        'Diseño móvil optimizado', 
        'Desarrollo ágil', 
        'Para todas las versiones', 
        'Integración con API REST'
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface WhatIDo {
  icon: string,
  title: string,
  content: string[]
}
