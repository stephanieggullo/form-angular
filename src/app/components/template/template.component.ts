import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }`]
})
export class TemplateComponent implements OnInit {

  user: object = {
    name: null,
    lastName: null,
    email: null,
    country: '',
    gender: 'Female',
    agree: false
  };

  countries = [{
    code: 'CRI',
    name: 'Costa Rica'
  },
  {
    code: 'ESP',
    name: 'España'
  }];

  gender: string[] = ['Male', 'Female'];

  constructor() { }

  ngOnInit() {
  }

  saveInfo( form: NgForm ){
    console.log(form);
    console.log(form.value, 'value!!!!');
    console.log(this.user, 'USER!!!!');


  }

}
