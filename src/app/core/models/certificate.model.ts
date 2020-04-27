export class MCertificate {
  public id: string;
  public name: string;
  public image: string;
  public link: string;

  constructor(certificate: ICertificate) {
    this.id = certificate.id;
    this.name = certificate.name;
    this.image = certificate.image;
    this.link = certificate.link;
  }
}

export interface ICertificate {
  id: string;
  name: string;
  image: string;
  link: string;
}
