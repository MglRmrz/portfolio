import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MProject } from '@core/models/project.model';

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  @Input() projects: MProject[];
  @ViewChild('divProjects', {static: true}) divProjects: ElementRef;
  scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.divProjects);
  }

  /**
   * @description Avanza al siguente proyecto
   */
  nextProject(): void {
    this.divProjects.nativeElement.scrollTo({left: (this.divProjects.nativeElement.scrollLeft + 250), behavior: 'smooth'});
  }

  /**
   * @description Retrocede al anterior proyecto
   */
  previousProject(): void {
    this.divProjects.nativeElement.scrollTo({left: (this.divProjects.nativeElement.scrollLeft - 250), behavior: 'smooth'});
  }

}
