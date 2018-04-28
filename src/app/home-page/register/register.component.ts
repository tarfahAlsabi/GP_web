import { Component, OnInit , Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {AuthService } from '../../core/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Manager } from '../../core/manager.model'
import * as firebase from 'firebase';

import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatExpansionPanelDescription } from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../home-page.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router:Router,
    public dialog: MatDialog, public authService: AuthService
    ,public flashMensaje: FlashMessagesService
  )
   { }
  // register
  fname: string;
  lname: string;
  phone: string;
  businessname: string;
  email: string;
  password: string;
  picPath: string;
  picName: string;
  manager: Manager = new Manager;
  selectedFiles: FileList;
  num: number;

  ngOnInit() {
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  
  }

  onSubmitAddUser() {
   this.authService.registerUser(this.manager.email,this.manager.password)
    .then((res:any) => {
      window.name = this.manager.businessname;
      var ReceiptID = 0;
      if(!this.manager.phone)
      this.manager.phone = 'لا يوجد رقم هاتف';

      if(this.selectedFiles){

        //start genrat password
    var passArray = [];
    var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['!', '#', '$', '&','@','}','%','^','(',')','-','_','+','=',':','{',';','[',']' ];
    var conecter = lower;
        conecter = conecter.concat(upper);
        conecter = conecter.concat(num); 
        conecter = conecter.concat(specialCharacters);
    
    for (var i = 1; i < 15; i++) {
        passArray.push(conecter[Math.floor(Math.random() * conecter.length)]);
    };
    this.manager.picName = passArray.join("");
   //end genrat password
      
        const file = this.selectedFiles.item(0);
        const storageRef = firebase.storage().ref(this.manager.picName);
        const uploadTask = storageRef.put(file); 
      
        uploadTask.then((r)=>{
          this.manager.picPath = uploadTask.snapshot.downloadURL;
           // this.manager.picName = file.name;
             this.authService.registerManager(ReceiptID,this.manager.email,this.manager.password,
              this.manager.fname,this.manager.lname,this.manager.phone,this.manager.businessname,
              this.manager.picName,this.manager.picPath,res.uid);
              this.router.navigate(['mainPage']);
        }).catch((erorr)=>{
        });
      }else{
        this.manager.picPath = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultEmployee.jpg?alt=media&token=ddf714e2-bf10-43ac-a575-75a52fde307e';
         this.manager.picName = 'defaultEmployee.jpg';
         
          this.authService.registerManager(ReceiptID,this.manager.email,this.manager.password,
          this.manager.fname,this.manager.lname,this.manager.phone,this.manager.businessname,
          this.manager.picName,this.manager.picPath,res.uid);
          this.router.navigate(['mainPage']);
        }
     
  
     
      
     
    }).catch( (err) => {
      this.flashMensaje.show('عملية تسجيل الدخول غير صحيحة, يرجى التأكد من ادخال جميع البيانات.',
      {cssClass: 'alert-danger', timeout: 5000});
    });
  
  }
  
}
