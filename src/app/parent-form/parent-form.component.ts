import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    name: new FormControl("Brandon",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email:new FormControl(),
    address:new FormGroup({
      street:new FormControl(),
      city:new FormControl(),
      postalcode:new FormControl(null,Validators.pattern('^[1-9][0-9]{4}$'))
    })
  });

  onSubmit(){
    console.log(this.userForm.value);
  }
}
