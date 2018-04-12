import { Component, OnInit , Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {AuthService } from '../core/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Manager } from '../core/manager.model'
import * as firebase from 'firebase';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private fragment: string;
  
  //homepage
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  // register
  fname: string;
  lname: string;
  phone: string;
  businessname: string;
  email: string;
  password: string;
  picPath: string;
  picName: string;
  manager: Manager;
  selectedFiles: FileList;
  num: number;

  //login
  emailLog: string;
  passwordLog: string;


constructor(private route: ActivatedRoute,private router:Router,
  public dialog: MatDialog, public authService: AuthService
  ,public flashMensaje: FlashMessagesService
)
 { }

 

ngOnInit() {
  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
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
detectFiles(event) {
  this.selectedFiles = event.target.files;

}
addFileThenRegistuer(){
  if(this.selectedFiles){
    const file = this.selectedFiles.item(0);
    const storageRef = firebase.storage().ref(file.name);
    const uploadTask = storageRef.put(file); 
  
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
  //     this.num = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => { 
        // upload success
        this.picPath = uploadTask.snapshot.downloadURL;
        this.picName = file.name;
        this.onSubmitAddUser();
      }
    );
  }else{
    this.picPath = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=cb0d86a8-cea9-4f19-9177-d12d0a054b62';
     this.picName = 'defaultEmployee.jpg';
     this.onSubmitAddUser();
    }
}
onSubmitAddUser() {
 this.authService.registerUser(this.email,this.password)
  .then((res) => {
    window.name = this.businessname;
    var ReceiptID = 0;
    if(this.selectedFiles){
      const file = this.selectedFiles.item(0);
      const storageRef = firebase.storage().ref(file.name);
      const uploadTask = storageRef.put(file); 
    
      uploadTask.then((r)=>{
        this.picPath = uploadTask.snapshot.downloadURL;
          this.picName = file.name;
          // this.authService.registerManager(ReceiptID,this.email,this.password,this.fname,this.lname,
          // this.phone,this.businessname,this.picName,this.picPath,res.uid);
      }).catch((erorr)=>{
        console.log('pic error');
      });
    }else{
      this.picPath = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=cb0d86a8-cea9-4f19-9177-d12d0a054b62';
       this.picName = 'defaultEmployee.jpg';
       
      // this.authService.registerManager(ReceiptID,this.email,this.password,this.fname,this.lname,
      //   this.phone,this.businessname,this.picName,this.picPath,res.uid);
   //    this.onSubmitAddUser();
      }
   

   
    this.router.navigate(['mainPage']);
   
  }).catch( (err) => {
    this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, أرجو التأكد من ادخال جميع البيانات.',
    {cssClass: 'alert-danger', timeout: 5000});
    console.log('error signup');
  });

}
loginTestFirst(){
  var flag;
  firebase.database().ref().on('value', (snap) => {
    let result = snap.val();
    console.log(result)
    for(let k in result){
     if(result[k].manager.email == this.emailLog) {
      window.name = result[k].manager.businessname;
      flag = true;
    }

    }
});
if(flag == true)
  this.onSubmitLogin();
  else
  console.log('error try again')

}

onSubmitLogin() {
  this.authService.loginEmail(this.emailLog, this.passwordLog)
  .then( (res) => {


    this.flashMensaje.show('عملية تسجيل دخول ناجحة مرحبا بك',
    {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['mainPage']);
    console.log('enter login');
  }).catch((err) => {
    this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, أرجو التأكد من البيانات.',
    {cssClass: 'alert-danger', timeout: 5000});
    this.router.navigate(['']);
  });
}

onClickLogout() {
  this.authService.logout().then( (res) => {
    this.flashMensaje.show('تم تسجيل الخروج بنجاح.',
    {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['mainPage']);
    console.log('enter login');
  }).catch((err) => {
    this.flashMensaje.show('حدثت مشكلة اثناء عملية تسجيل الخروج, أرجوا المحاولة مرة أخرى.',
    {cssClass: 'alert-danger', timeout: 5000});
    this.router.navigate(['']);
  });
}
ngAfterViewInit(): void {
  try {
    document.querySelector('#' + this.fragment).scrollIntoView();
  } catch (e) 
  { }
}
}

