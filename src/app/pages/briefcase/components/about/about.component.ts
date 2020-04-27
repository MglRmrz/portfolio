import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @Input() projectsNumber: number;

  currentLanguage: string;

  constructor(private _translate: TranslateService) {
    this._translate.get("language").subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  ngOnInit(): void {}
}
