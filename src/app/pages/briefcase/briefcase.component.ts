import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { SkillsService } from "@core/services/skills.service";
import { MSkill } from "@core/models/skill.model";
import { ProjectsService } from "@core/services/projects.service";
import { MProject } from "@core/models/project.model";
import { EmailService } from "@core/services/email.service";
import { IUserContact } from "./components/contact/contact.component";
import { CertificatesService } from "@core/services/certificates.service";
import { MCertificate } from "@core/models/certificate.model";
import Swal from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-briefcase",
  templateUrl: "./briefcase.component.html",
  styleUrls: ["./briefcase.component.scss"],
})
export class BriefcaseComponent implements OnInit {
  skills: MSkill[];
  projects: MProject[];
  certificates: MCertificate[];
  successSend: boolean = false;
  loadingSendEmail: boolean = false;

  constructor(
    private _skills: SkillsService,
    private _projects: ProjectsService,
    private _email: EmailService,
    private _certificates: CertificatesService,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.petitions();
    setTimeout(() => {
      Swal.fire({
        cancelButtonText: "English",
        cancelButtonColor: "#2a6896",
        confirmButtonText: "Español",
        confirmButtonColor: "#2a6896",
        title: "Idioma / Language",
        showCancelButton: true,
        icon: "question",
      }).then((result) => {
        // console.log(result);
        if (result.value) {
          this._translate.use("es");
          return;
        }
        this._translate.use("en");
      });
    }, 1000);
  }

  sendEmail({ email, message, name, subject }: IUserContact): void {
    this.loadingSendEmail = true;
    this._email
      .sendEmail(
        name.trim(),
        subject.trim(),
        email.trim().toLowerCase(),
        message.trim(),
        "es"
      )
      .subscribe(
        (resp) => {
          if (resp.success) {
            this.successSend = true;
            this.loadingSendEmail = false;
          }
        },
        (err) => {
          console.error(err);
          this.loadingSendEmail = false;
        }
      );
  }

  async petitions(): Promise<void> {
    const skillsPromise = this._skills.getSkills();
    const projetcsPromise = this._projects.getProjects();
    const certificatesPromise = this._certificates.getCertificates();

    const [
      skillsResult,
      projectsResult,
      certificatesResult,
    ] = await Promise.all([
      skillsPromise,
      projetcsPromise,
      certificatesPromise,
    ]);

    this.skills = skillsResult;
    // @ts-ignore
    this.projects = projectsResult;
    this.certificates = certificatesResult;
  }
}
