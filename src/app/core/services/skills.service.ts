import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
   * @return Observable<MSkill[]>
   */
  public getSkills(): Observable<MSkill[]> {
    return this.skillsCollection.valueChanges();
  }
}
