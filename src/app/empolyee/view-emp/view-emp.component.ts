import { Component, OnInit, Inject  } from '@angular/core';

//import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
//import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase'; 
import { FlashMessagesService } from 'angular2-flash-messages';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';


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
    ,public flashMensaje: FlashMessagesService, public dialog: MatDialog,
    private firebase: AngularFireDatabase) { }
/*name:String="أحمد الصالح ";
Id:String="MyID!";
Email:string="aa@aa.a";
phone:any=7474;
img:any='https://material.angular.io/assets/img/examples/shiba1.jpg';
salary:number=5000;*/

  ngOnInit() {
    this.temp = this.route.snapshot.params.id;

    this.firebase.object(window.name+'/employees/'+this.temp).snapshotChanges().subscribe(ob =>{
      let x = ob.payload.toJSON();
      x["$key"] = ob.key;
      this.employee = x as Employee;
      
    });    
}

delete(){
   let s= firebase.database().ref(window.name+'/employees');
   s.child(this.temp).remove().then((res)=>{
   if(this.employee.picName != 'defaultEmployee.jpg'){
    let storageRef = firebase.storage().ref();
    storageRef.child(this.employee.picName).delete();
   }
   this.router.navigate(['mainPage/empolyee']).then( (res) => {
    this.flashMensaje.show('تم تسريح الموظف بنجاح.',
    {cssClass: 'alert-success', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
  });
});
}

openDialog(check: boolean): void {
  if(check){
  let dialogRef = this.dialog.open(updateSalary, {

    data: { name: this.employee.firstName,salary: this.employee.salary } 
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      let s= firebase.database().ref(window.name+'/employees');
      s.child(this.temp).update({salary: result});
      if(result > this.salary){
        this.salary=result;
      this.flashMensaje.show('تم تعديل راتب الموظف بنجاح.',
      {cssClass: 'alert-success', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});

      }
  }
});
}else{
  let dialogRef = this.dialog.open(confirmMessageEmp, {
  
    data: { message: this.employee.firstName} 
  });

  dialogRef.afterClosed().subscribe(result => {
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
empSales()
{
  let id=this.temp
  this.router.navigate(['mainPage/Employee sales/',id]) 
}
empHours()
{
  let id=this.temp
  this.router.navigate(['mainPage/Employee working report/',id]) 
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
    return newSalary;
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
 

