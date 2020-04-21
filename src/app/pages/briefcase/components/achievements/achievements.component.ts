import { Component, OnInit, Input } from '@angular/core';
import { MProject } from '@core/models/project.model';

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  @Input() projects: MProject[];

  constructor() { }

  ngOnInit(): void {
  }

}
