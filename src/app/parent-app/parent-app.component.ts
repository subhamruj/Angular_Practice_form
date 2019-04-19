import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-app',
  templateUrl: './parent-app.component.html',
  styleUrls: ['./parent-app.component.css']
})
export class ParentAppComponent implements OnInit {

  myName:string = "brandon"
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any){
    console.log(value);
  }

}
