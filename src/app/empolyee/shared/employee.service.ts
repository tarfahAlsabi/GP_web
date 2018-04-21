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

//if(result){
   employee.username = employee.firstName; 
   if(path == 'none'){
     employee.picPATH = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=cb0d86a8-cea9-4f19-9177-d12d0a054b62';
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
    

    
 // }else{
    //fire alarm
 // }
     //let n;
   //  var fRef = firebase.database().ref(window.name+'/employees');
    //this.temp='1';
    var x=  this.authService.register(employee.email,employee.password,employee.username,
      employee.firstName,employee.lastName,employee.phone,employee.salary, employee.picPATH
      , employee.picName );

      this.sendMail(employee);
   // console.log('windo: '+window.name);

   /* console.log(x);
        if(x != 'fail')
        {fRef.child(x).set({
          username: employee.username,  
          email: employee.email,
          firstName: employee.firstName,
          lastName: employee.lastName,
          password: employee.password,
          phone: employee.phone,
          salary: employee.salary,
          picPATH: employee.picPATH,
          picName: employee.picName
          });
          console.log('complited')

        }else{
          console.log('error');
        }*/

     /* .then(
      (v) => {
        console.log(v)
        if(v != 'fail')
        {fRef.child(v).set({
          username: employee.username,  
          email: employee.email,
          firstName: employee.firstName,
          lastName: employee.lastName,
          password: employee.password,
          phone: employee.phone,
          salary: employee.salary,
          picPATH: employee.picPATH,
          picName: employee.picName
          });
          this.temp='1';
          console.log('rr')

        }else{
          console.log('s');
          this.temp='';
          this.temp = '0';
        }
       

    });
    console.log(this.temp);
    return this.temp;*/
     /*this.firebase.list('employees').push({
          username: employee.username,  
          email: employee.email,
          firstName: employee.firstName,
          lastName: employee.lastName,
          password: employee.password,
          phone: employee.phone,
          salary: employee.salary,
          picPATH: employee.picPATH,
          picName: employee.picName
          });*/
    //  }).catch((err) =>{
  //    x= false;
  }
  
  sendMail(employee:Employee)
  { 
   var request = require("request");
   var q=  { 
     method: 'POST',
      url: 'https://api.sendinblue.com/v3/smtp/templates/4/send',
      body:{
          sender: { email: 'eradsystem2018@gmail.com' },
          emailTo: [employee.email ] ,
          attributes:{'NAME':employee.firstName+" " +employee.lastName,'COMPANY': window.name ,'USERNAME':employee.username,'PASSWORD': employee.password},
          },
      json: true ,
    headers:{'api-key':'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'} };
      
      request(q, function (error, response, body) {
        if (error) throw new Error(error);
      
        console.log(body);
      });
  }

  delete(employee : Employee){
    if(confirm("هل انت متأكد من تسريح الموظف")){
    this.employeeList.remove(employee.$key);
   //let fileName = employee.picPATH.substring(employee.picPATH.indexOf(',')+1);

    if(employee.picName != 'defaultEmployee.jpg'){
     let storageRef = firebase.storage().ref();
     storageRef.child(employee.picName).delete();
    }
   // let admin = require('firebase-admin');
 //   firebase.auth().currentUser.(employee.$key)..deleteUser(employee.email);
    this.router.navigate(['mainPage/empolyee']);
  }

  }
  


}
