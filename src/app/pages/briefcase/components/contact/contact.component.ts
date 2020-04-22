import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Output() onSendEmail: EventEmitter<IUserContact> = new EventEmitter<IUserContact>();
  @Input() successIsVisible: boolean;
  @Input() loadingSend: boolean;
  
  userContact: IUserContact = {
    name: '',
    email: '',
    message: '',
    subject: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description Activa el evento para enviar un correo
   */
  sendEmail(): void {
    this.onSendEmail.emit(this.userContact);
    this.userContact = {
      name: '',
      email: '',
      message: '',
      subject: ''
    }
  }

}

export interface IUserContact {
  name: string,
  email: string,
  subject: string,
  message: string
}
