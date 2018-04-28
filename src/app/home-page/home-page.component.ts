import { Component, OnInit , Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {AuthService } from '../core/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Manager } from '../core/manager.model'
import * as firebase from 'firebase';



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


  //login
 

constructor(private route: ActivatedRoute,private router:Router,
  public dialog: MatDialog, public authService: AuthService
  ,public flashMensaje: FlashMessagesService
)
 { }

 
 show:boolean = false;

 toggleCollapse() {
   this.show = !this.show
 }
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


onClickLogout() {
  this.authService.logout().then( (res) => {
    this.flashMensaje.show('تم تسجيل الخروج بنجاح.',
    {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['mainPage']);
  }).catch((err) => {
    this.flashMensaje.show('حدثت مشكلة اثناء عملية تسجيل الخروج, أرجوا المحاولة مرة أخرى.',
    {cssClass: 'alert-danger', timeout: 5000});
    this.router.navigate(['']);
  });
}
ngAfterViewInit(): void {
  try {
    document.querySelector('#' + this.fragment).scrollIntoView();
  } catch (e) 
  { }
}




}

