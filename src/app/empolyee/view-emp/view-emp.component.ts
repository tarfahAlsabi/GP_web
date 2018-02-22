import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css'],
  providers :[EmployeeService]
})
export class ViewEmpComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
name:String="أحمد الصالح ";
Id:String="MyID!";
Email:string="aa@aa.a";
phone:any=7474;
img:any='https://material.angular.io/assets/img/examples/shiba1.jpg';
salary:number=5000;

  ngOnInit() {
  }

}
