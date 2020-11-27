import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any
  constructor(){
    this.employees=[{
      eid:101,
      ename:'nutan',
      salary:25000
    },{
      eid:102,
      ename:'renuka',
      salary:25000
    },{eid:103,
      ename:'roshan',
      salary:25000}
  ]
  }
  ngOnInit(): void {
  }
  
}

export class employees{
  eid:number;
    ename:String;
    salary:number;
  constructor(eid:number,ename:String,salary:number) {
    this.eid=eid;
    this.ename=ename;
    this.salary=salary
   }
}
