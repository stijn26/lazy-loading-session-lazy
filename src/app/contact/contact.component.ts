import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
declare var window: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  contactForm: FormGroup;
  name = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  message = new FormControl('', Validators.required);

  infoStatus: String = '';

  constructor(
    private http: Http,
    fb: FormBuilder
  ) {
    this.contactForm = fb.group({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
  }

  onSubmit() {

    const body = `name=${this.contactForm.value.name}&email=${this.contactForm.value.email}&message=${this.contactForm.value.message}`;
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    console.log('Form submit succesfull');
  }

}
