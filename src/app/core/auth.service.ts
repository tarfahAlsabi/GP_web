import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
//import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map';
import { Manager } from './manager.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Key } from 'protractor';
import { environment } from '../../environments/environment.prod';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private db:AngularFireDatabase) { }

   register(email:string,password:string,firstName,lastName,phone,salary,picPATH,picName){
    try{
      var secondaryApp = firebase.initializeApp(environment.firebaseConfig, "Secondary");

  secondaryApp.auth().createUserWithEmailAndPassword(email,password).then(function(firebaseUser) {
    var x = firebaseUser.uid;
    firebase.database().ref(window.name+'/employees').child(x).set({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      phone: phone,
      salary: salary,
      picPATH: picPATH,
      picName: picName
      });
    secondaryApp.auth().signOut();
    return x;
});
     }catch(e){
      return 'fail';
     }
  
     }


  registerUser(email,password) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => { 
        resolve(userData);

      },
      err => reject (err));
    });
  }
  
  
  registerManager(ReceiptID,email,password,fname,lname,phone,businessname,picName,picPath,uid){
    
    firebase.database().ref(businessname+'/manager').set({
      ReceiptID:ReceiptID,
      email: email,
      fname: fname,
      lname: lname,
      password: password,
      phone: phone,
      businessname: businessname,
      picPath: picPath,
      picName: picName,
      uid: uid
      });
      firebase.database().ref(window.name+'/employees').child(uid).set({
        email: email,
        firstName: fname,
        lastName: lname,
        password: password,
        phone: phone,
        salary: 0,
        picPATH: picPath,
        picName: picName
        });
      
  }

  loginTestFirst(email: string, pass: string){
   var ref= firebase.database().ref();
   ref.orderByChild("email").equalTo(email).once("value", function(snapshot) {
  });
  }
 

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  resetPass(emailAddress: string):boolean{

    firebase.auth().sendPasswordResetEmail(emailAddress).then(function() {
      return true;
    }).catch(function(error) {
      return false;
        });
        return true;
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    window.name = '';
    return this.afAuth.auth.signOut();
  }


}
