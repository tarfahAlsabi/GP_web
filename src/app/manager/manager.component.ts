import { Component, OnInit, Inject  } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Manager } from '../core/manager.model';

import * as firebase from 'firebase';

//import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public title="حسابك الشخصي";
  manager:Manager;
  
  constructor(private firebase: AngularFireDatabase,private db: AngularFireDatabase,
     private router:Router,public flashMensaje: FlashMessagesService, public dialog: MatDialog,
     public authService: AuthService) { }

  ngOnInit() {

  this.firebase.object(window.name+'/manager').snapshotChanges().subscribe(ob =>{
    let x = ob.payload.toJSON();
    x["$key"] = ob.key;
    this.manager = x as Manager;
    
  });
  }
  onEdite(){
  let id = this.manager.uid;
    this.router.navigate(['mainPage/edit-manager/',id]);
  }

  
  deleteAccount()
  {
    let dialogRef = this.dialog.open(confirmDelete);

    dialogRef.afterClosed().subscribe(result => {
     
      if(result!=null)
      {
        this.db.list(window.name+'/products/').snapshotChanges().subscribe(categories=>{
          if(categories!=null)
          categories.forEach(cat =>
          {
            this.db.list(window.name+'/products/'+cat.key).snapshotChanges().subscribe(prods=>{ 
              prods.forEach(prod=>{
               let product:any= prod.payload.toJSON();
               this.deletephoto(product.picName)
                                   })                                                         })    
          })
        });
              
 
        this.db.list(window.name+'/employees/').snapshotChanges().subscribe(emps=>{
          if(emps !=null)
        emps.forEach(emp=>{
        let employee:any= emp.payload.toJSON();
        this.deletephoto(employee.picName)
                          })
        })

        var user = firebase.auth().currentUser;
        this.db.list(window.name).remove().then( 
          (res) => {
            
        user.delete().then(result => {
          // User deleted.

          this.router.navigate(['']).then(n =>{
            this.flashMensaje.show('تم حذف المشروع بنجاح ',
            {cssClass: 'alert-success', timeout: 100000, 
            closeOnClick: true, showCloseBtn: true});
          })


        }).catch((error)=> {
          // An error happened.
          this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف يرجى المحاولة مرة أخرى.',
          {cssClass: 'alert-danger', timeout: 100000, 
          closeOnClick: true, showCloseBtn: true});
          
        });
        


        }).catch((err) => {
          this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف يرجى المحاولة مرة أخرى.',
          {cssClass: 'alert-danger', timeout: 100000, 
          closeOnClick: true, showCloseBtn: true});
          
        });



      }
 
    });
  }
  deletephoto(picName)
  {
    if(picName != 'defaultproduct.png' &&  picName != 'defaultEmployee.jpg'  ){
      let storageRef = firebase.storage().ref();
      storageRef.child(picName).delete();
     }
  }

  isEmail(search:string):boolean
    {
        var  serchfind:boolean;

       let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        serchfind = regexp.test(search);

       return serchfind
    }

  resetPassword(){

    let dialogRef = this.dialog.open(ResetPassword);

    dialogRef.afterClosed().subscribe(result => {
     
      if(result!=null)
      {
        if(this.isEmail(result)){
          let x = this.authService.resetPass(result);
          if(x){
            this.flashMensaje.show('تم ارسال طلب تغيير الرقم السري على بريدك الإلكتروني.',
            {cssClass: 'alert-success', timeout: 100000, 
            closeOnClick: true, showCloseBtn: true});
          }else{
            this.flashMensaje.show('حدثت مشكلة أثناء عملية ارسال طلب تغيير الرقم السري يرجى المحاولة مرة أخرى.',
            {cssClass: 'alert-danger', timeout: 100000, 
            closeOnClick: true, showCloseBtn: true});
          }
        }else{
          this.flashMensaje.show('يرجى كتابة البريد الإلكتروني بشكل صحيح.',
          {cssClass: 'alert-danger', timeout: 100000, 
          closeOnClick: true, showCloseBtn: true});
        }
      }
    });
  }
}


@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-Message-emp.html',
  styleUrls: ['./manager.component.css']
})
export class confirmDelete {
  yes:string='yes';
  message:string;
  constructor(
    public dialogRef: MatDialogRef<confirmDelete>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


}

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.html',
  styleUrls: ['./manager.component.css']
})
export class ResetPassword {
  yes:string='yes';
  email:string;
  constructor(
    public dialogRef: MatDialogRef<ResetPassword>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    resetPassword(email:string){
      return email;
    }


}


