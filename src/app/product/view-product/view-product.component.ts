import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
//import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
//import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
//  providers:[ProductService]
})
export class ViewProductComponent implements OnInit {
  temp:any;
  tempArray: string[];
  key: any;
  name:String;
  img:string;
  imgName: string;
  cost:number;
  price:number;
  quantity:number;
  description:string;
  Tag:string;
  product: Product;
  //productList: Product[];
  title='عرض بيانات '
  constructor(private router: Router, private route: ActivatedRoute
    ,public flashMensaje: FlashMessagesService,public dialog: MatDialog) { }

  
  ngOnInit() {
    this.temp = this.route.snapshot.params.id;

    this.tempArray = this.temp.split(",");
    this.key = this.tempArray[0];
    this.name = this.tempArray[1];
    this.Tag = this.tempArray[2];
    this.cost = Number(this.tempArray[3]);
    this.description = this.tempArray[4];
    this.quantity = Number(this.tempArray[5]);
    this.imgName = this.tempArray[6];
    this.img = this.tempArray[7];
    this.price = Number(this.tempArray[8]);

  }

  onEdit() {
    let id=this.key+","+this.name+","+this.Tag+","+this.cost+","+this.description+","+this.quantity+","+this.imgName+","+this.img+","+this.price;
    this.router.navigate(["mainPage/Add_Product/",id]);
  }
  delete(){
     
      
       let s = firebase.database().ref(window.name+'/products/'+this.Tag).child(this.key).remove();

       if(this.imgName != 'defaultproduct.png'){
        let storageRef = firebase.storage().ref();
        storageRef.child(this.imgName).delete();
       }
        this.router.navigate(['mainPage/product']).then( (res) => {
          this.flashMensaje.show('تم حذف المنتج بنجاح.',
          {cssClass: 'alert-success', timeout: 100000, 
          closeOnClick: true, showCloseBtn: true});
        });
      
  }
  gobacktoProducts()
  {
    this.router.navigate(['mainPage/product'])
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(confirmMessage, {
  
      data: { message: this.name} 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        
      this.delete()

    }
  });
  }


  prodSales()
{
  let id=this.key
  this.router.navigate(['mainPage/productReport/',id]) 
}
}

@Component({
  selector: 'confirm-message',
  templateUrl: './confirm-Message.html',
  styleUrls: ['./view-product.component.css']
})
export class confirmMessage {

  message:string;
  constructor(
    public dialogRef: MatDialogRef<confirmMessage>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    confirm()
  {
    return true;
  }

}
 
