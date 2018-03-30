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

   register(email:string,password:string,username,firstName,lastName,phone,salary,picPATH,picName){
    try{
      var secondaryApp = firebase.initializeApp(environment.firebaseConfig, "Secondary");
  //const result = this.afAuth.auth.createUserWithEmailAndPassword(email,password);

  secondaryApp.auth().createUserWithEmailAndPassword(email,password).then(function(firebaseUser) {
    var x = firebaseUser.uid;
    firebase.database().ref(window.name+'/employees').child(x).set({
      username: username,  
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      phone: phone,
      salary: salary,
      picPATH: picPATH,
      picName: picName
      });
    //I don't know if the next statement is necessary 
    secondaryApp.auth().signOut();
    return x;
});
 //result.then((r)=>{
   //console.log(r.uid);
  // })

  // if(result){
  //  return result.uid;


     // this.navCtrl.push(HomePage);
 //   }
    
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
  
  
  registerManager(ReceiptID,email,password,fname,lname,phone,businessname,picName,picPath){
    firebase.database().ref(businessname+'/manager').set({
      ReceiptID:ReceiptID,
      email: email,
      fname: fname,
      lname: lname,
      password: password,
      phone: phone,
      businessname: businessname,
      picPath: picPath,
      picName: picName
      });
  }

  loginTestFirst(email: string, pass: string){
    console.log('s')

   var ref= firebase.database().ref();
   ref.orderByChild("email").equalTo(email).once("value", function(snapshot) {
    console.log(snapshot.key);
  });

  /*  firebase.database().ref().child('manager').child('email').isEqual("najla123@gmail.com").snapshotChanges().subscribe(item=>{
      for(var element2 in item) {
        var y = item[element2].payload.key;
      this.db.list(y+'/manager').snapshotChanges().subscribe(element => {
        element.forEach(element2 => {
        var y = element2.payload.toJSON();
        y["$key"] = element2.key;
       if(y["email"] == 'najla123@gmail.com'){
         console.log('true')
         return true;
        }
        });
      });
      }
    });*/
   // return false;
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
    window.name = '';
    return this.afAuth.auth.signOut();
  }


}
