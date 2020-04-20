import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot, DocumentData } from '@angular/fire/firestore';
import { MSkill } from '@core/models/skill.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skillsCollection: AngularFirestoreCollection<MSkill>;

  constructor(private firestore: AngularFirestore) { 
    this.skillsCollection = this.firestore.collection<MSkill>('skills');
  }

  /**
   * @description Obtiene las skills
   * @return Promise<QuerySnapshot<DocumentData>>
   */
  public getSkills(): Promise<MSkill[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const data: MSkill[] = [];
        const snapshot = await this.skillsCollection.ref.orderBy('position', 'asc').get();

        snapshot.forEach(skill => {
          data.push(<MSkill>skill.data());
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }  
    })
  }
}
