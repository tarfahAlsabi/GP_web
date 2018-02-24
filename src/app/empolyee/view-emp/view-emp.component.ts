import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css'],
  providers :[EmployeeService]
}) 
export class ViewEmpComponent implements OnInit {
  temp:any;
  tempArray: string[];
  key: any;
  name:String;
  Email:string;
  phone:string;
  img:string;
  salary:number;
  imgName: string;
  employee: Employee;
  employeeList: Employee[];

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute) { }
/*name:String="أحمد الصالح ";
Id:String="MyID!";
Email:string="aa@aa.a";
phone:any=7474;
img:any='https://material.angular.io/assets/img/examples/shiba1.jpg';
salary:number=5000;*/

  ngOnInit() {
    this.temp = this.route.snapshot.params.id;

    this.tempArray = this.temp.split(",");
    this.key = this.tempArray[0];
    this.name = this.tempArray[2]+" "+this.tempArray[3];
    this.Email = this.tempArray[1];
    this.phone = this.tempArray[4];
    this.img = this.tempArray[5];
    this.salary = Number(this.tempArray[6]);
    this.imgName = this.tempArray[7];

      
      var x = this.employeeService.getData();
       x.snapshotChanges().subscribe(item => {
        this.employeeList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
        //  y["picPATH"] = this.getImg(y["picPATH"]);
          this.employeeList.push(y as Employee);
          if(this.key == element.key)
            this.employee= y as Employee;
        });
      });
      // let employeesNumber=(this.employeeList.length/3);
    
}

delete(){
  /*  let $key = this.key;
    let email = this.Email;
    let username =this.tempArray[8];
    let firstName = this.tempArray[2];
    let lastName = this.tempArray[3];
    let password = this.tempArray[9];
    let phone = this.phone;
    let picPATH = this.img;
    let picName = this.imgName;
    let salary = this.salary;

    let ee:Employee ={$key,email,username,firstName,lastName,password,phone,picPATH,picName,salary};*/
    this.employeeService.delete(this.employee);
}


}
