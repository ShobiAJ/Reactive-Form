import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Reactive Forms';

  constructor(private _fb: FormBuilder) {}

  userForm : FormGroup;

  ngOnInit() {
    this.userForm = this._fb.group ({
      firstname : ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.userForm)
  }
  
}
