import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selected: number = 0;

  navOptions: {option: string, key: number}[] = [
    {option: 'Inicio', key: 0},
    {option: 'Sobre mí', key: 1},
    {option: 'Habilidades', key: 2},
    {option: 'Proyectos', key: 3},
    {option: 'Contactame', key: 4},
  ]
  isMenuOpen: boolean = false;
  displayBackdrop: 'none' | 'block' = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
