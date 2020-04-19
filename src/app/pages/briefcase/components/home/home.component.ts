import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opacityGreeting: '0' | '1' = '1';
  opacityProfession: '0' | '1' = '0';

  constructor() { }

  ngOnInit(): void {
    this.startInterval();
  }

  startInterval(): void {
    setInterval(() => {
      if (this.opacityGreeting === '0') {
        this.opacityGreeting = '1';
      } else {
        this.opacityGreeting = '0';
      }
      if (this.opacityProfession === '0') {
        this.opacityProfession = '1';
      } else {
        this.opacityProfession = '0';
      }
    }, 5000);
  }

}
