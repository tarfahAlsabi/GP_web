import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee} from './employee.model';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../core/auth.service';


@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee(); 
  n:any;
  temp: string;


  constructor(private authService: AuthService, private afAuth: AngularFireAuth,
    private firebase: AngularFireDatabase,private router:Router,private db:AngularFireDatabase ) {}
  
  getData(){ 
    this.employeeList = this.firebase.list(window.name+'/employees');
    return this.employeeList;
  }
  insert(employee : Employee, path: string,fileName: string){ 
   
    /* */
    //start genrat password
    var passArray = [];
    var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['!', '#', '$', '&', '/','?'];
    var conecter = lower;
        conecter = conecter.concat(upper);
        conecter = conecter.concat(num); 
        conecter = conecter.concat(specialCharacters);
    
    for (var i = 1; i < 9; i++) {
        passArray.push(conecter[Math.floor(Math.random() * conecter.length)]);
    };
    employee.password = passArray.join("");
   //end genrat password

 
   if(path == 'none'){
     employee.picPATH = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=ddf714e2-bf10-43ac-a575-75a52fde307e';
     employee.picName = 'defaultEmployee.jpg';
    }else{
     employee.picPATH = path;
     employee.picName = fileName;
   }

     if(employee.phone == ''){
       employee.phone = 'لا يوجد رقم';
     }
     if(employee.salary  == null){
      employee.salary = 0;
    }
    

    var x=  this.authService.register(employee.email,employee.password,
      employee.firstName,employee.lastName,employee.phone,employee.salary, employee.picPATH
      , employee.picName );

      this.sendMail(employee);
   
  }
  
  sendMail(employee:Employee)
  { 
   var request = require("request");
   var name = employee.firstName+" " +employee.lastName;
   var q=  { 
     method: 'POST',
      url: 'https://api.sendinblue.com/v3/smtp/templates/4/send',
      body:{
          sender: { email: 'eradsystem2018@gmail.com' },
          emailTo: [employee.email ] ,
          attributes:{'NAME': name,'COMPANY': window.name ,'USERNAME':employee.email,'PASSWORD': employee.password},
          },
      json: true ,
    headers:{'api-key':'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'} };
      
      request(q, function (error, response, body) {
        if (error) throw new Error(error);
      
      });
  }

  delete(employee : Employee){
    if(confirm("هل انت متأكد من تسريح الموظف")){
    this.employeeList.remove(employee.$key);

    if(employee.picName != 'defaultEmployee.jpg'){
     let storageRef = firebase.storage().ref();
     storageRef.child(employee.picName).delete();
    }
    this.router.navigate(['mainPage/empolyee']);
  }

  }
  


}
