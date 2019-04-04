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
    name: '',
    lastName: '',
    email: null,
  };

  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()

    });

    this.form.controls['password2'].setValidators([
      Validators.required,
      this.notEqual.bind(this.form)
    ]);

    // this.form.setValue(this.user);
  }

  notEqual(control: FormControl): { [s: string]: boolean } {

    let form: any = this;
    if (control.value !== form.controls['password1'].value) {
      return {
        noequal: true
      }
    }

    return null;
  }

  ngOnInit() {
  }

  saveInfo() {
    console.log(this.form.value);
  }

}
