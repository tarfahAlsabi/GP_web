import { Component, OnInit } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

import { EmployeeService } from './shared/employee.service'

@Component({
  selector: 'app-empolyee',
  templateUrl: './empolyee.component.html',
  styleUrls: ['./empolyee.component.css'],
  providers :[EmployeeService]
})
export class EmpolyeeComponent implements OnInit {

  constructor(private router:Router, private employeeService : EmployeeService) { }

  public title="الموظفين";
  public AddBtn="إضافة موظف  ";
  public items= [
    {'name' : 'emp1','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg','id':'3'},
   {'name' : 'product6','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg','id':'1'}
  ]
    ngOnInit() {
  
     let itemNumber=(this.items.length/3);
  }
    viewProduct(item)
    {
      confirm('inside the method'+item.id);

    this.router.navigate(['View_employee',item.id]);
     
    }
    deletItem()
    {
      confirm("are you sure ?");
    }
    
}
