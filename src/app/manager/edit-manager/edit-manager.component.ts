import { Component, OnInit, Inject } from '@angular/core';

import * as firebase from'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from '../../core/manager.model';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

  temp: string;
  manager: Manager;
  selectedFiles: FileList;
  num: number;



  constructor(private route: ActivatedRoute, private router: Router,
  public flashMensaje: FlashMessagesService,public dialog: MatDialog) { }

  ngOnInit() {
    this.temp = this.route.snapshot.params.id;
    this.resetForm();
    if((this.temp != '') && (this.temp != ':id')){
      this.onEdit();
      console.log('entered')
    }
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
}

  onEdit(){
    let array = this.temp.split(",");
    let fname = array[0];
    let lname = array[1];
    let phone = array[2];
    let picName ='';
    let password ='';
    let email = '';
    let picPath='';
    let businessname ='';
    let ReceiptID =''
    let $key = '1';
    let mm:Manager = {$key,fname,lname,phone,picName,password,email,picPath,ReceiptID,businessname};
    this.manager = Object.assign({},mm);

  }

  onSubmit(managerForm: NgForm){
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
          firebase.database().ref(window.name+'/manager').update({
            fname: managerForm.value.fname,
            lname: managerForm.value.lname,
            phone: managerForm.value.phone,
            picPath: uploadTask.snapshot.downloadURL,
            picName: file.name
          });
            this.resetForm(managerForm); 
            this.router.navigate(['mainPage/manager']).then( (res) => {
              this.flashMensaje.show('تم تحديث بياناتك بنجاح.',
              {cssClass: 'alert-success', timeout: 10000, 
              closeOnClick: true, showCloseBtn: true});
            });
             
        });

    }else{
      firebase.database().ref(window.name+'/manager').update({
        fname: managerForm.value.fname,
        lname: managerForm.value.lname,
        phone: managerForm.value.phone,
      });
        this.resetForm(managerForm); 
        this.router.navigate(['mainPage/manager']).then( (res) => {
          this.flashMensaje.show('تم تحديث بياناتك بنجاح.',
          {cssClass: 'alert-success', timeout: 10000, 
          closeOnClick: true, showCloseBtn: true});
        });
    }

  }

  resetForm(managerForm?: NgForm) {
    if (managerForm != null){
       managerForm.reset();
       this.num = null;
       this.selectedFiles = null;
    }
    this.manager = {
      $key: null,
      fname: '',
      lname  : '',
      email  : '',
      password : '',
      businessname : '',
      ReceiptID : '',
      picPath : '', 
      picName : '',
      phone: ''

    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(confirmMessageCancleManag, {
  
      data: { message: '' } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == true){
        
        this.resetForm();
        this.router.navigate(['mainPage/manager']);

    }
  });
  }
}

@Component({
  selector: 'confirm-message-cancle-manag',
  templateUrl: './confirm-Message-cancle-manag.html',
  styleUrls: ['./edit-manager.component.css']
})
export class confirmMessageCancleManag {

  message:string;
  constructor(
    public dialogRef: MatDialogRef<confirmMessageCancleManag>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    confirm()
  {
    return true;
  }

}

