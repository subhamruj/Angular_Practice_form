import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared-services/student.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {

  students=[];
  constructor(private _stdservice:StudentService) { }

  ngOnInit() {
    this._stdservice.getStudentData().subscribe(data=>{
      this.students = data.Employees;
    })
  }

}
