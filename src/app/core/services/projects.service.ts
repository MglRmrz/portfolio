import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MProject, IProject } from '@core/models/project.model';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsCollection: AngularFirestoreCollection<MProject>

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.projectsCollection = this.afs.collection<MProject>('projects')
  }

  /**
   * @description Obtiene todos los proyectos
   * @return Promise<MProject[]
   */
  public getProjects(): Promise<MProject[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const data: MProject[] = [];
        const snapshot = await this.projectsCollection.ref.orderBy('date', 'desc').get();

        snapshot.forEach(async snap => {
          const image: string = await this.storage.ref(snap.data().image).getDownloadURL().toPromise();
          const id: string = snap.id;
          const project = {
            ...snap.data(),
            id,
            image
          } as IProject;

          data.push(new MProject(project));
          
        })

        resolve(data);
        
      } catch (error) {
        reject(error);
      }
    })
  }
}
