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
  manager: Manager[];
  
  constructor(private firebase: AngularFireDatabase,private db: AngularFireDatabase,
     private router:Router,public flashMensaje: FlashMessagesService, public dialog: MatDialog) { }

  ngOnInit() {

  //  this.coursesObservable = this.db.object(window.name+'/manager').valueChanges();
  //  this.manager= null;
  this.manager = [];
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
      });
  }
  onEdite(){
    let id = this.manager[3]+','+this.manager[4]+','+this.manager[6];
    this.router.navigate(['mainPage/edit-manager/',id]);
  }



  deleteProject()
  {
    let dialogRef = this.dialog.open(confirmDelete);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result!=null)
      {
        this.db.list(window.name).remove().then( 
          (res) => {
          this.router.navigate(['']).then(n =>{
            this.flashMensaje.show('تم حذف المشروع بنجاح ',
            {cssClass: 'alert-success', timeout: 40000});
          })

        }).catch((err) => {
          this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.',
          {cssClass: 'alert-danger', timeout: 40000});
          
        });
       
      }
 
    });
  }
  
}


@Component({
  selector: 'confirm-delete',
  templateUrl: './confirm-Message-emp.html',
  styleUrls: ['./manager.component.css']
})
export class confirmDelete {
  yes:string='yes';
  message:string;
  constructor(
    public dialogRef: MatDialogRef<confirmDelete>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


}

