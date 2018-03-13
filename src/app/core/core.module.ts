import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';


import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import {AngularFireModule} from 'angularfire2';

import {AuthGuard} from '../guards/auth.guard';


@NgModule({
  imports: [
    AngularFireAuthModule,
    CommonModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
