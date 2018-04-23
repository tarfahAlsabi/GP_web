import { Component, OnInit } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

import { EmployeeService } from './shared/employee.service';
import { Employee } from'./shared/employee.model';

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css'],
  providers :[EmployeeService]
})
export class EmpolyeeComponent implements OnInit {
  employeeList: Employee[];
  num: number;

  constructor(private router:Router, private employeeService : EmployeeService) { }

  public title="الموظفين";
  public AddBtn="إضافة موظف  ";
  
    ngOnInit() { 
      
    var x = this.employeeService.getData();
     x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
        this.num++;
      });
    });
  }
  
    viewemployee(employee : Employee)
    { 
      let id=employee.$key;
      this.router.navigate(['mainPage/View_employee/',id]);
    }   
    add(){
      this.router.navigate(['mainPage/Add_employee']);
    }
}
