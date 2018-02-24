import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';


import { EmployeeService } from '../shared/employee.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
  providers :[EmployeeService]
})


export class AddEmpComponent  {
  selectedFiles: FileList;
  num: number;


constructor(private fb: FormBuilder,private employeeService: EmployeeService)
{
  
 }

 
ngOnInit() {
  this.employeeService.getData();
  this.resetForm();
}

detectFiles(event) {
  this.selectedFiles = event.target.files;
  console.log(this.selectedFiles);
  console.log('s');

}
onSubmit(employeeForm: NgForm) {

  if(this.selectedFiles){
    console.log('enter');


  const file = this.selectedFiles.item(0);
  const storageRef = firebase.storage().ref(file.name);
  const uploadTask = storageRef.put(file); 

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) =>  {
      // upload in progress
     this.num = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
    },
    (error) => {
      // upload failed
      console.log(error)
    },
    () => { 
      // upload success
      this.employeeService.insert(employeeForm.value,uploadTask.snapshot.downloadURL,file.name);
      this.resetForm(employeeForm);
     // this.tostr.success('Submitted Succcessfully', 'Employee Register');
    }
  );
}else{
  this.employeeService.insert(employeeForm.value, 'none','none');
  this.resetForm(employeeForm);
 // this.tostr.success('Submitted Succcessfully', 'Employee Register');
}
}

resetForm(employeeForm?: NgForm) {
  if (employeeForm != null){ 
    employeeForm.reset();
    this.num = null;
    this.selectedFiles = null;
  }
  this.employeeService.selectedEmployee = {
    $key: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    salary: null,
    username:'',  
    password: '',
    picPATH: '',
    picName:'',
  }
} 

}