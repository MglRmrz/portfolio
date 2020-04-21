import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() selected: number = 0;

  navOptions: {option: string, key: number, target: string}[] = [
    {option: 'Inicio', key: 0, target: '#home'},
    {option: 'Sobre mí', key: 1, target: '#about'},
    {option: 'Habilidades', key: 2, target: '#skills'},
    {option: 'Proyectos', key: 3, target: '#achievements'},
    {option: 'Contactame', key: 4, target: '#contact'},
  ]
  isMenuOpen: boolean = false;
  displayBackdrop: 'none' | 'block' = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSelected(selected: number): void {
    this.isMenuOpen = false;
    this.selected = selected;
  }

}
