import { Component, OnInit, Input } from '@angular/core';
import { MProject } from '@core/models/project.model';

@Component({
  selector: 'achievements-card',
  templateUrl: './achievements-card.component.html',
  styleUrls: ['./achievements-card.component.scss']
})
export class AchievementsCardComponent implements OnInit {

  @Input() project: MProject;

  constructor() { }

  ngOnInit(): void {
  }

}
