import { Component, OnInit , Inject } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html',
  styleUrls: ['./inv.component.css']
})
export class InvComponent implements OnInit {
  // productList: Product[];
  // constructor(private router:Router,private db :AngularFireDatabase,private productService : ProductService ,public dialog: MatDialog)  { }
  constructor(private router:Router,public dialog: MatDialog)  { }
 
  public title="المخزون ";
  
  public productList= [
    {'name' : 'أقلام','id':'1','quantity': 4 , 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
    {'name' : 'دفاتر','id':'2','quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
    {'name' : 'كتب','id':'3','quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
    {'name' : 'ألعاب','id':'4' ,'quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
    {'name' : 'غير ذلك','id':'6', 'quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
  ];

  
  ngOnInit() {
  //   this.productList = [];
  //   let x = this.productService.getData();
  //   x.snapshotChanges().subscribe(item => {
  //   for(var element2 in item) {
  //     var y = item[element2].payload.key;
  //   this.db.list('products/'+y).snapshotChanges().subscribe(element => {
  //     element.forEach(element2 => {
  //     var y = element2.payload.toJSON();
  //     y["$key"] = element2.key;
  //    // y["picPath"] = this.getImg(y["picPath"]);
  //    this.productList.push(y as Product);
  //     });
  //   });
  //   }
  //   this.productList = [];
  // });
  }
  viewProduct(item)
  {
    confirm('inside the method'+item.id);
  
    this.router.navigate(['mainPage/View_Producct',item.id]);
  }

  openDialog(item): void {
    let dialogRef = this.dialog.open(addQuantity, {
  
      data: { name: item.name,quantity:item.quantity } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result)
      item.quantity = result;
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

  addquantity(newQuantity:number ,quantity:number)
  {
    return newQuantity + quantity;
  }

}

