import { Component, OnInit,Inject } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  productList: Product[];
  constructor(private router:Router,private db :AngularFireDatabase
    ,private productService : ProductService ,public dialog: MatDialog
    ,public flashMensaje: FlashMessagesService)  { }
   public title="المنتجات";
   public AddBtn="إضافة منتج ";


ngOnInit() {
  this.productList = [];
  let x = this.productService.getData();
  x.snapshotChanges().subscribe(item => {
  for(var element2 in item) {
    var y = item[element2].payload.key;
  this.db.list('products/'+y).snapshotChanges().subscribe(element => {
    element.forEach(element2 => {
    var y = element2.payload.toJSON();
    y["$key"] = element2.key;
   this.productList.push(y as Product);
    });
  });
  }
  this.productList = [];
});
}
/*getImg(url: String){
  return url.substring(0,url.indexOf(','));
}*/
viewProduct(product: Product)
{
  let id=product.$key+","+product.name+","+product.category+","+product.cost+","+product.description+","+product.inventory+","+product.picName+","+product.picPath+","+product.price;
  this.router.navigate(['mainPage/View_Producct',id]);
}

  Add() 
  {
      let id:string ='';
      this.router.navigate(['mainPage/Add_Product/',id]);
  }
  openDialog(item: Product): void {
    let dialogRef = this.dialog.open(addQuantity, {
  
      data: { name: item.name,inventory:item.inventory } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
      let x = this.productService.updateProductInv(item,result);
        this.flashMensaje.show('تم تحديث كمية المنتج بنجاح.',
        {cssClass: 'alert-success', timeout: 4000});

    }
  });
  }

}


@Component({
  selector: 'add-quantity',
  templateUrl: './add-Quantity.html',
  styleUrls: ['./inv.component.css']
})
export class addQuantity {

  name:string;
  newQuantity:number;
  constructor(
    public dialogRef: MatDialogRef<addQuantity>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  addquantity(newQuantity:number ,inventory:number)
  {
    return newQuantity + inventory;
  }

}
 