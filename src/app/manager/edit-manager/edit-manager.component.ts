import { Component, OnInit, Inject } from '@angular/core';

import * as firebase from'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { Manager } from '../../core/manager.model';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

  uid: string;
  manager: Manager;
  selectedFiles: FileList;
  num: number;

  gobacktoProducts()
  {
    this.router.navigate(['mainPage/manager']);
  }

  constructor(private route: ActivatedRoute, private router: Router,
  public flashMensaje: FlashMessagesService,public dialog: MatDialog,
  private firebase: AngularFireDatabase) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params.id;
    this.resetForm();
    if((this.uid != '') && (this.uid != ':id')){
    }
    this.firebase.object(window.name+'/manager').snapshotChanges().subscribe(ob =>{
      let x = ob.payload.toJSON();
      x["$key"] = ob.key;
      this.manager = x as Manager;
      
    });
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
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
          firebase.database().ref(window.name+'/employees').child(this.uid).update({
            firstName: managerForm.value.fname,
            lastName: managerForm.value.lname,
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
        phone: managerForm.value.phone
      });
      firebase.database().ref(window.name+'/employees').child(this.uid).update({
        firstName: managerForm.value.fname,
        lastName: managerForm.value.lname,
        phone: managerForm.value.phone    
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
      phone: '',
      uid:''

    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(confirmMessageCancleManag, {
  
      data: { message: '' } 
    });

    dialogRef.afterClosed().subscribe(result => {
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

