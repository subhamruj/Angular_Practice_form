import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent implements OnInit {

  @Input() parentData:string
  @Output() childData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireUp(){
    this.childData.emit("invoked child component");
    console.log("calling..");
  }

}
