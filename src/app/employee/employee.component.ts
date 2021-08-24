import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import employees from "./employee.json";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployee:any=true;
  experienced:any=false;
  candidate_data:any;
  experiencedEmployees:any=[];
  term: any;
  departments:any=[];
  finance:any=0;
  hr:any=0;
  operations:any=0;
  development:any=0;
  departmentAfterDevelopment:any=[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.candidate_data=employees
    console.log(this.candidate_data)
    this.getDepratments();
  }

  sortByName(){
    this.candidate_data.candidate_data.sort((a:any,b:any) => a.name > b.name ? 1 : -1)
  }
sortByJoiningDate(){
  this.candidate_data.candidate_data.sort((a:any,b:any) => new Date(a.joining_date) > new Date(b.joining_date) ? 1 : -1)
}
getExperiencedEmployee(){
  this.experiencedEmployees=[];
  this.experienced=true;
  this.allEmployee=false;
var twoYears = new Date();
var pastYear = twoYears.getFullYear() - 2;
twoYears.setFullYear(pastYear);
console.log(twoYears);
  this.candidate_data.candidate_data.forEach((employee:any) => {
    if(new Date(employee.joining_date)<twoYears){
      console.log(employee)
      this.experiencedEmployees.push(employee)
    }
  });
}
getAllEmployee(){
  this.candidate_data=employees;
  this.allEmployee=true;
  this.experienced=false;
}
getDepratments(){

 this.departments = [...new Set( this.candidate_data.candidate_data.map((item:any) => item.department))];
console.log(this.departments);
this.candidate_data.candidate_data.forEach((department:any)=>{
  if(department.department=="Finance"){
    this.finance++;
  }
  if(department.department=="HR"){
    this.hr++;
  }
  if(department.department=="Development"){
    this.development++;
  }
  if(department.department=="Operations"){
    this.operations++;
  }
})
}

removeDevelopment(){
  this.candidate_data.candidate_data.forEach((department:any)=>{
    if(department.department != "Development"){
      this.departmentAfterDevelopment.push(department);
    }
  })
  console.log(this.departmentAfterDevelopment)
}


}
