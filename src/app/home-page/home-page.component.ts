import { Component, OnInit , Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {AuthService } from '../core/auth.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Manager } from '../core/manager.model'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private fragment: string;
  
  //homepage
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  // register
  fname: string;
  lname: string;
  phone: string;
  businessname: string;
  email: string;
  password: string;
  manager: Manager;

  //login
  emailLog: string;
  passwordLog: string;


constructor(private route: ActivatedRoute,private router:Router,
  public dialog: MatDialog, public authService: AuthService
 // ,public flashMensaje: FlashMessagesService
)
 { }

 

ngOnInit() {
  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  this.authService.getAuth().subscribe( auth => {
    if (auth) {
      this.isLogin = true;
      this.nombreUsuario = auth.displayName;
      this.emailUsuario = auth.email;
      this.fotoUsuario = auth.photoURL;
    } else {
      this.isLogin = false;
    }
  });
}

onSubmitAddUser() {
  this.authService.registerUser(this.email, this.password)
  .then((res) => {
   /* this.flashMensaje.show('Usuario creado correctamente.',
    {cssClass: 'alert-success', timeout: 4000});*/
    console.log('enter signup');
    this.manager = {email:this.email,password:this.password,fname:this.fname,lname:this.lname,phone:this.phone,businessname:this.businessname}

    this.authService.registerManager(this.manager);
    this.router.navigate(['mainPage']);
   
  }).catch( (err) => {
  /*  this.flashMensaje.show(err.message,
    {cssClass: 'alert-danger', timeout: 4000});*/
    console.log('error signup');
  });

}

onSubmitLogin() {
  this.authService.loginEmail(this.emailLog, this.passwordLog)
  .then( (res) => {
   /* this.flashMensaje.show('Usuario logado correctamente.',
    {cssClass: 'alert-success', timeout: 4000});*/
    this.router.navigate(['mainPage']);
    console.log('enter login');
  }).catch((err) => {
    /*this.flashMensaje.show(err.message,
    {cssClass: 'alert-danger', timeout: 4000});*/
   // this.router.navigate(['/login']);
    console.log('error login');
  });
}

onClickLogout() {
  console.log('enter logout');
  this.authService.logout();
}
ngAfterViewInit(): void {
  try {
    document.querySelector('#' + this.fragment).scrollIntoView();
  } catch (e) 
  { }
}
}

