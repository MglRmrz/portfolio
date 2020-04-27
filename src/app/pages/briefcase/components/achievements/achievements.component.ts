import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { MProject } from "@core/models/project.model";
import { MCertificate } from "@core/models/certificate.model";

@Component({
  selector: "achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.scss"],
})
export class AchievementsComponent implements OnInit {
  @Input() projects: MProject[];
  @Input() certificates: MCertificate[];
  @ViewChild("divProjects", { static: false }) divProjects: ElementRef;
  @ViewChild("divCertificates", { static: false }) divCertificates: ElementRef;
  scrollPosition: number = 0;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.divProjects);
  }

  /**
   * @description Avanza al siguente proyecto
   */
  nextProject(): void {
    this.divProjects.nativeElement.scrollTo({
      left: this.divProjects.nativeElement.scrollLeft + 250,
      behavior: "smooth",
    });
  }

  /**
   * @description Retrocede al anterior proyecto
   */
  previousProject(): void {
    this.divProjects.nativeElement.scrollTo({
      left: this.divProjects.nativeElement.scrollLeft - 250,
      behavior: "smooth",
    });
  }

  /**
   * @description Avanza al siguente proyecto
   */
  nextCertificate(): void {
    this.divCertificates.nativeElement.scrollTo({
      left: this.divCertificates.nativeElement.scrollLeft + 250,
      behavior: "smooth",
    });
  }

  /**
   * @description Retrocede al anterior proyecto
   */
  previousCertificate(): void {
    this.divCertificates.nativeElement.scrollTo({
      left: this.divCertificates.nativeElement.scrollLeft - 250,
      behavior: "smooth",
    });
  }
}
