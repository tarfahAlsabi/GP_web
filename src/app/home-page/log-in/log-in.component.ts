import { Component, OnInit , Inject, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {AuthService } from '../../core/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Manager } from '../../core/manager.model'
import * as firebase from 'firebase';
import { Login } from './login.model';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['../home-page.component.css']
})
export class LogInComponent implements OnInit {

  emailLog: any=[];
  passwordLog: any=[];
  login: Login= new Login;
 


  constructor(private route: ActivatedRoute,private router:Router,
    public dialog: MatDialog, public authService: AuthService
    ,public flashMensaje: FlashMessagesService
  )
   { }

  ngOnInit() {
    this.emailLog.errors=false;
    this.passwordLog.errors=false;
  }
  loginTestFirst(){
    var flag;
   
    firebase.database().ref().on('value', (snap) => {
      let result = snap.val();
      for(let k in result){
       if(result[k].manager.email == this.login.email) {
        window.name = result[k].manager.businessname;
        flag = true;
      }
  
      }
  });
  if(flag == true)
    this.onSubmitLogin();
    else
    this.flashMensaje.show('حصل خطأ يرجى المحاولة مره اخرى',
    {cssClass: 'alert-danger', timeout: 5000});
  }
  
  onSubmitLogin() {
    this.authService.loginEmail(this.login.email, this.login.password)
    .then( (res) => {
  
      firebase.database().ref().on('value', (snap) => {
        let result = snap.val();
        for(let k in result){
         if(result[k].manager.email == this.login.email) {
          window.name = result[k].manager.businessname;
        }
    
        }
    });
  /*    this.flashMensaje.show('عملية تسجيل دخول ناجحة مرحبا بك',
      {cssClass: 'alert-success', timeout: 5000});
      this.router.navigate(['mainPage']);
      console.log('enter login');
    }).catch((err) => {
      this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, يرجى التأكد من البيانات.',
      {cssClass: 'alert-danger', timeout: 5000});*/
     // this.router.navigate(['']);
    }).then((rse)=>{
      this.flashMensaje.show('عملية تسجيل دخول ناجحة مرحبا بك',
      {cssClass: 'alert-success', timeout: 5000});
      this.router.navigate(['mainPage']);
      console.log('enter login');
    }).catch((err) => {
      this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, يرجى التأكد من البيانات.',
      {cssClass: 'alert-danger', timeout: 5000});
    });
  }
}