import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthService } from '../core/auth.service';

import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Manager } from '../core/manager.model';
import { AngularFireDatabase } from 'angularfire2/database';
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
    CatsState:boolean = false;
    expenState:boolean = false;
    finanState:boolean = false;

  public isLogin: boolean;
  public username: string;
  public emailUser: string;
  //public fotoUsuario: string;
  manager: Manager[];



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
    , public authService :AuthService , private router:Router
    ,public flashMensaje: FlashMessagesService, private firebase: AngularFireDatabase,
    private db: AngularFireDatabase
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
    this.manager = [];
    this.firebase.list(window.name).snapshotChanges().subscribe(item =>{
      item.forEach( element =>{
       for(var element2 in item) {
         var y = item[element2].payload.key;
         if(y == 'manager'){
           
         this.db.list(window.name+'/'+y).snapshotChanges().subscribe(element => {
         element.forEach(element2 => {
         var y = element2.payload.toJSON();
         
       //  y["$key"] = element2.key;
        this.manager.push(y as Manager);
         });
       });}
       }
       this.manager = [];
      });
     });
  }

  onClickLogout() {
    this.authService.logout().then( (res) => {
      this.flashMensaje.show('تم تسجيل الخروج بنجاح.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['']);
    }).catch((err) => {
      this.flashMensaje.show('حدثت مشكلة اثناء عملية تسجيل الخروج, يرجى المحاولة مرة أخرى.',
      {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  profile(){
    this.router.navigate(['mainPage/manager']);
  }


  shouldRun = true;
}

