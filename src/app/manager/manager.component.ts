import { Component, OnInit, Inject  } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Manager } from '../core/manager.model';

import * as firebase from 'firebase';

//import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public title="حسابك الشخصي";
  manager1: Manager[];
  manager:Manager;
  
  constructor(private firebase: AngularFireDatabase,private db: AngularFireDatabase,
     private router:Router,public flashMensaje: FlashMessagesService, public dialog: MatDialog) { }

  ngOnInit() {

  //  this.coursesObservable = this.db.object(window.name+'/manager').valueChanges();
  //  this.manager= null;

  this.firebase.object(window.name+'/manager').snapshotChanges().subscribe(ob =>{
    let x = ob.payload.toJSON();
    x["$key"] = ob.key;
    this.manager = x as Manager;
    
  });
  /*this.manager = [];
     this.firebase.list(window.name).snapshotChanges().subscribe(item =>{
       item.forEach( element =>{
        for(var element2 in item) {
          var y = item[element2].payload.key;
          if(y == 'manager'){
            
          this.db.list(window.name+'/'+y).snapshotChanges().subscribe(element => {
          element.forEach(element2 => {
          var y = element2.payload.toJSON();
          
        //  y["$key"] = element2.key;
         this.manager.push(y as Manager);
          });
        });}
        }
        this.manager = [];
       });
      });*/
  }
  onEdite(){
  //  let id = this.manager[3]+','+this.manager[4]+','+this.manager[6];
  let id = this.manager.uid;
  console.log(this.manager.uid)
    this.router.navigate(['mainPage/edit-manager/',id]);
  }
}

