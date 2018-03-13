import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthService } from '../core/auth.service';

import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent  {
  mobileQuery: MediaQueryList;
    TagState: boolean = false;
    ProdState: boolean = false;
    EmpState: boolean = false;
    ChartsState: boolean = false;
    InvState:boolean = false;

  public isLogin: boolean;
  public username: string;
  public emailUser: string;
  //public fotoUsuario: string;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    , public authService :AuthService , private router:Router
    ,public flashMensaje: FlashMessagesService
) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.username = auth.displayName;
        this.emailUser = auth.email;
        //this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
        this.router.navigate(['']);
      }
    });
  }

  onClickLogout() {
    this.authService.logout().then( (res) => {
      this.flashMensaje.show('تم تسجيل الخروج بنجاح.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['']);
      console.log('enter login');
    }).catch((err) => {
      this.flashMensaje.show('حدثت مشكلة اثناء عملية تسجيل الخروج, أرجوا المحاولة مرة أخرى.',
      {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  shouldRun = true;
}

