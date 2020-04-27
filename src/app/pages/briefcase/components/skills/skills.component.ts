import { Component, OnInit, Input } from "@angular/core";
import { MSkill } from "@core/models/skill.model";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  @Input() skills: MSkill[];

  whatIDo: WhatIDo[];

  constructor(private _translate: TranslateService) {
    this._translate.stream("skills").subscribe((resp) => {
      this.whatIDo = [
        {
          title: resp.web.title,
          icon: "./assets/icons/web-development.svg",
          content: [
            resp.web.option1,
            resp.web.option2,
            resp.web.option3,
            resp.web.option4,
          ],
        },
        {
          title: resp.android.title,
          icon: "./assets/icons/android.svg",
          content: [
            resp.android.option1,
            resp.android.option2,
            resp.android.option3,
            resp.android.option4,
          ],
        },
      ];
    });
  }

  ngOnInit(): void {}
}

interface WhatIDo {
  icon: string;
  title: string;
  content: string[];
}
