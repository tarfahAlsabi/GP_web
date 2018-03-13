import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';


import { EmployeeService } from '../shared/employee.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
  providers :[EmployeeService]
})


export class AddEmpComponent  {
  selectedFiles: FileList;
  num: number;


constructor(private fb: FormBuilder,private employeeService: EmployeeService
,private router: Router,public flashMensaje: FlashMessagesService
)
{
  
 }

 
ngOnInit() {
  this.employeeService.getData();
  this.resetForm();
}

detectFiles(event) {
  this.selectedFiles = event.target.files;
  

}
onSubmit(employeeForm: NgForm) {

  if(this.selectedFiles){


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
      if(this.employeeService.insert(employeeForm.value,uploadTask.snapshot.downloadURL,file.name))
       { this.resetForm(employeeForm);
         this.router.navigate(['mainPage/empolyee']);}
     // this.tostr.success('Submitted Succcessfully', 'Employee Register');
    }
  );
}else{
  if(this.employeeService.insert(employeeForm.value, 'none','none'))
    {this.resetForm(employeeForm);
     this.router.navigate(['mainPage/empolyee']).then( (res) => {
      this.flashMensaje.show('تم إضافة الموظف بنجاح.',
      {cssClass: 'alert-success', timeout: 4000});
    });
  }else{
    this.flashMensaje.show('الرجاء التأكد من ادخال الإميل الصحيح.',
      {cssClass: 'alert-danger', timeout: 6000});
  }
 // this.tostr.success('Submitted Succcessfully', 'Employee Register');
}
}
cancel(){
  this.resetForm();
  this.router.navigate(['mainPage/empolyee']);
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