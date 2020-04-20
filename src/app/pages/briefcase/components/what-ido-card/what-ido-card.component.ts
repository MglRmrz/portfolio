import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'what-ido-card',
  templateUrl: './what-ido-card.component.html',
  styleUrls: ['./what-ido-card.component.scss']
})
export class WhatIDoCardComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() content: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
