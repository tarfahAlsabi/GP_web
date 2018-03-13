import { Component, OnInit } from '@angular/core';

//import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase'; 
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
  //providers :[EmployeeService]
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
  //employeeList: Employee[];

  constructor(private route: ActivatedRoute,private router:Router
    ,public flashMensaje: FlashMessagesService) { }
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

      
      // let employeesNumber=(this.employeeList.length/3);
    
}

delete(){

   // this.employeeService.delete(this.employee);
   if (confirm('هل أنت متأكد من تسريح هذا المنتج؟') == true){
   let s= firebase.database().ref('employees');
   s.child(this.key).remove();
   if(this.imgName != 'defaultEmployee.jpg'){
    let storageRef = firebase.storage().ref();
    storageRef.child(this.imgName).delete();
   }
   this.router.navigate(['mainPage/empolyee']).then( (res) => {
    this.flashMensaje.show('تم تسريح الموظف بنجاح.',
    {cssClass: 'alert-success', timeout: 4000});
  });
}
}


}
