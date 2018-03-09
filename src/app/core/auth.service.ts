import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
//import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map';
import { Manager } from './manager.model';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async register(email:string,password:string){
    try{
  const result = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);

 

   if(result){
    return result.uid;


     // this.navCtrl.push(HomePage);
    }
    
     }
     catch(e){
      //this.navCtrl.push(WelcomePage);
      return 'fail';
  
  
     }
  
     }


  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }
  
  registerManager(manager: Manager){
    firebase.database().ref('manager').set({
      email: manager.email,
      fname: manager.fname,
      lname: manager.lname,
      password: manager.password,
      phone: manager.phone,
      businessname: manager.businessname
      });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }


}
