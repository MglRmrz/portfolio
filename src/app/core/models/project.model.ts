
export class MProject {
    public id: string;
    public name: string;
    public description: string;
    public tool: string;
    public link: string;
    public image: string;
    public date: any;

    constructor(project: IProject) {
        this.id = project.id;
        this.name = project.name;
        this.description = project.description;
        this.tool = project.tool;
        this.link = project.link;
        this.image = project.image;
        this.date = project.date;
    }
}

export interface IProject {
    id: string,
    name: string,
    description: string,
    tool: string,
    link: string,
    image: string,
    date: any
}