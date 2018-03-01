import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';


import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  imports: [
    AngularFireAuthModule,
    CommonModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
