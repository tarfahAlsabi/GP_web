import { Injectable } from '@angular/core';

//import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
//import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

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

}
