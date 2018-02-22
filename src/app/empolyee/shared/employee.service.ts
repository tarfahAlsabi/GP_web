import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee} from './employee.model';
import * as firebase from 'firebase';


@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee(); 

  constructor(private firebase: AngularFireDatabase,private db:AngularFireDatabase ) {}
  
  getData(){ 
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;

  }
  insert(employee : Employee, path: string,fileName: string){ 
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
   if(path == 'none')
     employee.picPATH = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=cb0d86a8-cea9-4f19-9177-d12d0a054b62,defaultEmployee.jpg';
   else
     employee.picPATH = path+(',')+fileName;

    this.employeeList.push({
    username: employee.username,  
    email: employee.email,
    firstName: employee.firstName,
    lastName: employee.lastName,
    password: employee.password,
    phone: employee.phone,
    salary: employee.salary,
    picPATH: employee.picPATH
    });
 // }else{
    //fire alarm
 // }

  }

  delete(employee: Employee){
    this.employeeList.remove(employee.$key);
    let fileName = employee.picPATH.substring(employee.picPATH.indexOf(',')+1);
    
    if(fileName != 'defaultEmployee.jpg'){
     let storageRef = firebase.storage().ref();
     storageRef.child(fileName).delete();
    }

  }
  


}
