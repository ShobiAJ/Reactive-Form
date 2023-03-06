import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Reactive Forms';
  formTable: any = [];
  completedTable: any = [];
  updateEdit: any;
  enableEdit: boolean = false;
  isCompleted: boolean = false;

  constructor(private _fb: FormBuilder) {}

  userForm: FormGroup;

  ngOnInit() {
    this.userForm = this._fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onAdd() {
    let formDetails = {
      firstName: this.userForm.controls.firstname.value,
      lastName: this.userForm.controls.lastname.value,
      email: this.userForm.controls.email.value,
    };
    this.formTable.push(formDetails);
    this.userForm.reset();
    // alert('Form saved successfully')
  }

  onEdit(items, index) {
    this.userForm.get('firstname').setValue(items.firstName);
    this.userForm.get('lastname').setValue(items.lastName);
    this.userForm.get('email').setValue(items.email);
    this.updateEdit = index;
    this.enableEdit = true;
  }

  onUpdate() {
    this.formTable[this.updateEdit].firstName =
      this.userForm.controls.firstname.value;
    this.formTable[this.updateEdit].lastName =
      this.userForm.controls.lastname.value;
    this.formTable[this.updateEdit].email = this.userForm.controls.email.value;
    this.userForm.reset();
    this.enableEdit = false;
  }

  onDelete(i) {
    this.formTable.splice(i, 1);
    this.userForm.reset();
    this.enableEdit = false;
  }

  onDone(item, i) {
    let completedItems = {
      fname: item.firstName,
      lname: item.lastName,
      email: item.email,
    };
    this.completedTable.push(completedItems);
    this.onDelete(i);
  }

  onDeleteCompletedItems(i) {
    this.completedTable.splice(i, 1);
  }
}
