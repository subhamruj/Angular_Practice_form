import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url:string="https://gist.githubusercontent.com/rominirani/8235702/raw/a50f7c449c41b6dc8eb87d8d393eeff62121b392/employees.json";
  constructor(private http:Http) { 
  }

  getStudentData(){
    return this.http.get(this.url).pipe(map(data=>data.json()));
  }

}
