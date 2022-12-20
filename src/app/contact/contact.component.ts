import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, FormControlName, FormGroupName } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // [x: string]: any;

  // contactMe(): void {
  //   let sendTo = this.contact.value.email;
  //   let Messages = this.contact.value.message;
  //   let NamesFull = this.contact.value.name;
  //   let Objects = this.contact.value.object;

  // }

  // contact = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.email),
  //   object: new FormControl('', Validators.required),
  //   message: new FormControl('', Validators.required)
  // });

  // mailOptions = {
  //   from: `${this.contact.value.email}`,
  //   to: `mohammed.rabhi@outlook.de`,
  //   subject: `${this.contact.value.object}`,
  //   html: `${this.contact.value.message}`
  // };


  // onSubmit(contactForm: NgForm) {
  //   if (contactForm.valid) {
  //     const email = contactForm.value;
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     this['http'].post('https://formspree.io/asdlf7asdf',
  //       { name: email.name, replyto: email.email, message: email.messages },
  //       { 'headers': headers }).subscribe(
  //         (response: any) => {
  //           console.log(response);
  //         }
  //       );
  //   }
  // }


  //transporter.sendMail(mailOptions, callback);



}