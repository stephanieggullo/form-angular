import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
    .red {
      border: 1px solid red;
    }`]
})
export class DataComponent implements OnInit {

  form: FormGroup;

  user: object = {
    name: 'Steph',
    lastName: 'Guevara',
    email: null,
  };

  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(3)
                                  ]),
      'lastName': new FormControl('', Validators.required  ),
      'email': new FormControl('', [
                                      Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]     )
    });

    this.form.setValue(this.user);
   }

  ngOnInit() {
  }

  saveInfo(){
    console.log(this.form.value);
  }

}
