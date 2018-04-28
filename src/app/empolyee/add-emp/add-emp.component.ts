import { Component, OnInit, Inject } from '@angular/core';
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
import {Http, Request, RequestMethod , RequestOptionsArgs, Headers} from '@angular/http';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpHeaders } from '@angular/common/http';

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
,private router: Router,public flashMensaje: FlashMessagesService, 
public dialog: MatDialog,private HttpHeader: Http)
{
 }

 
ngOnInit() {
  this.employeeService.getData();
  this.resetForm();
 
  // var config = {headers: {'api-key':'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'}};
  // var options:Request=new Request('');
  // options.method=RequestMethod.Get;
  // options.url='https://api.sendinblue.com/v3/smtp/statistics/reports';  
  // options.headers.append('api-key','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')

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
    },
    () => { 
      // upload success
      let r = this.employeeService.insert(employeeForm.value,uploadTask.snapshot.downloadURL,file.name);
     // if(r == '1'){
        this.resetForm(employeeForm);

          this.router.navigate(['mainPage/empolyee']).then( (res) => {
           this.flashMensaje.show('تم إضافة الموظف بنجاح.',
           {cssClass: 'alert-success', timeout: 100000, 
           closeOnClick: true, showCloseBtn: true});
         });//}
     // this.tostr.success('Submitted Succcessfully', 'Employee Register');
    }
  );
}else{
  let x = this.employeeService.insert(employeeForm.value, 'none','none');
  
    this.resetForm(employeeForm);
    
     this.router.navigate(['mainPage/empolyee']).then( (res) => {
      this.flashMensaje.show('تم إضافة الموظف بنجاح.',
      {cssClass: 'alert-success',timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
    });
 // }
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
    password: '',
    picPATH: '',
    picName:'',
  }
} 
gobacktoProducts()
{
  this.router.navigate(['mainPage/empolyee'])
}

openDialog(): void {
  let dialogRef = this.dialog.open(confirmMessageancleEmp, {

    data: { message: ''} 
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result == true){
      
      this.resetForm();
      this.router.navigate(['mainPage/empolyee']);

  }
});
}
}

@Component({
  selector: 'confirm-message-cancle-emp',
  templateUrl: './confirm-Message-cancle-emp.html',
  styleUrls: ['./add-emp.component.css']
})
export class confirmMessageancleEmp {

  message:string;
  constructor(
    public dialogRef: MatDialogRef<confirmMessageancleEmp>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    confirm()
  {
    return true;
  }

}