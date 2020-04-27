import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { MCertificate, ICertificate } from "@core/models/certificate.model";

@Injectable({
  providedIn: "root",
})
export class CertificatesService {
  private certificatesCollection: AngularFirestoreCollection<MCertificate>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.certificatesCollection = this.afs.collection<MCertificate>(
      "certificates"
    );
  }

  /**
   * @description Obtiene los certificados
   * @return Promise<MCertificate[]>
   */
  public async getCertificates(): Promise<MCertificate[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const data: MCertificate[] = [];
        const snapshot = await this.certificatesCollection.ref
          .orderBy("position", "asc")
          .get();

        snapshot.forEach(async (snap) => {
          const image: string = await this.storage
            .ref(snap.data().image)
            .getDownloadURL()
            .toPromise();
          const id: string = snap.id;
          const certificate = {
            ...snap.data(),
            id,
            image,
          } as ICertificate;
          data.push(new MCertificate(certificate));
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}
