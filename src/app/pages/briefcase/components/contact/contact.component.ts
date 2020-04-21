import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userContact: IUserContact = {
    name: '',
    email: '',
    message: '',
    subject: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface IUserContact {
  name: string,
  email: string,
  subject: string,
  message: string
}
