export class MProject {
  public id: string;
  public name: string;
  public descriptionES: string;
  public descriptionEN: string;
  public tool: string;
  public link: string;
  public image: string;
  public date: any;

  constructor(project: IProject) {
    this.id = project.id;
    this.name = project.name;
    this.descriptionEN = project.descriptionEN;
    this.descriptionES = project.descriptionES;
    this.tool = project.tool;
    this.link = project.link;
    this.image = project.image;
    this.date = project.date;
  }
}

export interface IProject {
  id: string;
  name: string;
  descriptionES: string;
  descriptionEN: string;
  tool: string;
  link: string;
  image: string;
  date: any;
}
