import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  user: object ={
    name: 'Seph',
    lastName: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  saveInfo( form: NgForm ){
    console.log(form);
    console.log(form.value, 'value!!!!');
    console.log(this.user, 'USER!!!!');


  }

}
