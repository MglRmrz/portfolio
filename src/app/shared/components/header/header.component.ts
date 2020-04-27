import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() selected: number = 0;

  navOptions: { option: string; key: number; target: string }[];
  isMenuOpen: boolean = false;
  displayBackdrop: "none" | "block" = "none";
  currentLanguage: "es" | "en" = "en";

  constructor(private _translate: TranslateService) {
    this._translate.stream("header").subscribe((resp) => {
      this.navOptions = [
        { option: resp.home, key: 0, target: "#home" },
        { option: resp.about, key: 1, target: "#about" },
        { option: resp.skills, key: 2, target: "#skills" },
        { option: resp.achievements, key: 3, target: "#achievements" },
        { option: resp.hireme, key: 4, target: "#contact" },
      ];
    });

    this._translate.stream("language").subscribe((resp) => {
      this.currentLanguage = resp;
    });
  }

  ngOnInit(): void {}

  menuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSelected(selected: number): void {
    this.isMenuOpen = false;
    this.selected = selected;
  }

  changeLanguage(event: any): void {
    this._translate.use(event.target.value);
  }
}
