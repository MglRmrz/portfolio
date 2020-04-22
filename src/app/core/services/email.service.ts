import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor(private http: HttpClient) { }

  /**
   * @description Envia un correo electrónico
   * @param userName Nombre de la persona que envia el mensaje
   * @param subject Asunto del mensaje
   * @param dest Email de la persona que envia el mensaje
   * @param message Mensaje que escribió la persona
   * @param language El lenguaje del texto
   * @return Observable<any>
   */
  public sendEmail(
    userName: string, 
    subject: string, 
    dest: string, 
    message: string, 
    language: 'en' | 'es'
    ): Observable<any> {
    return this.http.post('https://us-central1-portafolio-fb03a.cloudfunctions.net/api/email', {
      userName,
      subject,
      dest,
      message,
      language
    });
  }

}
