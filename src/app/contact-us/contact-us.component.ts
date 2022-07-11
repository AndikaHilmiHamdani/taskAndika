import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_tlgl1oo', 'template_wb3u9do', e.target as HTMLFormElement, '3pkENJqshplltq5hY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  ngOnInit(): void {
  }

}
