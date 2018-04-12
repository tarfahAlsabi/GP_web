import { Component, OnInit, Inject  } from '@angular/core';

//import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase'; 
import { FlashMessagesService } from 'angular2-flash-messages';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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
  public title ='بيانات '

  constructor(private route: ActivatedRoute, private router:Router
    ,public flashMensaje: FlashMessagesService, public dialog: MatDialog) { }
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
   let s= firebase.database().ref(window.name+'/employees');
   s.child(this.key).remove();
   if(this.imgName != 'defaultEmployee.jpg'){
    let storageRef = firebase.storage().ref();
    storageRef.child(this.imgName).delete();
   }
   this.router.navigate(['mainPage/empolyee']).then( (res) => {
    this.flashMensaje.show('تم تسريح الموظف بنجاح.',
    {cssClass: 'alert-success', timeout: 10000, 
    closeOnClick: true, showCloseBtn: true});
  });

}

openDialog(check: boolean): void {
  if(check){
  let dialogRef = this.dialog.open(updateSalary, {

    data: { name: this.name,salary: this.salary } 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result){
      let s= firebase.database().ref(window.name+'/employees');
      s.child(this.key).update({salary: result});
      if(result > this.salary){
        this.salary=result;
      this.flashMensaje.show('تم تعديل راتب الموظف بنجاح.',
      {cssClass: 'alert-success', timeout: 10000, 
      closeOnClick: true, showCloseBtn: true});

      }
  }
});
}else{
  let dialogRef = this.dialog.open(confirmMessageEmp, {
  
    data: { message: this.name} 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result == true){
      
    this.delete()

  }
});
}
}
gobacktoProducts()
{
  this.router.navigate(['mainPage/empolyee'])
}

}
@Component({
  selector: 'update-salary',
  templateUrl: './update-Salary.html',
  styleUrls: ['./view-emp.component.css']
})
export class updateSalary {

  name:string;
  newSalary:number;
  constructor(
    public dialogRef: MatDialogRef<updateSalary>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  addquantity(newSalary:number ,salary:number)
  {
    return newSalary + salary;
  }
 
}


@Component({
  selector: 'confirm-message-emp',
  templateUrl: './confirm-Message-emp.html',
  styleUrls: ['./view-emp.component.css']
})
export class confirmMessageEmp {

  message:string;
  constructor(
    public dialogRef: MatDialogRef<confirmMessageEmp>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    confirm()
  {
    return true;
  }

}
 

