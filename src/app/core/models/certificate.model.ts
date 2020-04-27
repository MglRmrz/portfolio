export class MCertificate {
  public id: string;
  public name: string;
  public image: string;
  public link: string;
  public position: number;

  constructor(certificate: ICertificate) {
    this.id = certificate.id;
    this.name = certificate.name;
    this.image = certificate.image;
    this.link = certificate.link;
    this.position = certificate.position;
  }
}

export interface ICertificate {
  id: string;
  name: string;
  image: string;
  link: string;
  position: number;
}
