import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() projectsNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

}
