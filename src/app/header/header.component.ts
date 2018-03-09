import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthService } from '../core/auth.service';


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
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public authService :AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
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
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  shouldRun = true;
}

