import { Component, OnInit } from '@angular/core';
import { Login } from '../../home-page/log-in/login.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Manager } from '../../core/manager.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../core/auth.service';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePass: Login= new Login;
  manager:Manager;

  constructor(private firebase: AngularFireDatabase,public flashMensaje: FlashMessagesService,
    public authService: AuthService) { }

  ngOnInit() {
    this.firebase.object(window.name+'/manager').snapshotChanges().subscribe(ob =>{
      let x = ob.payload.toJSON();
      x["$key"] = ob.key;
      this.manager = x as Manager;
      
    });
  }

  submit(loginForm: NgForm){
    if(this.changePass.email != this.manager.password){
      this.flashMensaje.show('الرقم السري السابق غير صحيح.',
      {cssClass: 'alert-danger', timeout: 40000});
      this.resetForm(loginForm);

    }else{
      this.authService.resetPass(this.changePass.password);
    }

  }
  resetForm(loginForm?: NgForm) {
    if (loginForm != null){ 
      loginForm.reset();
    }
    this.changePass = {
      email: '',
      password: '',
    }
  } 
}
