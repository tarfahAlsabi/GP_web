import { Component, OnInit , Inject } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-inv',
  templateUrl: './inv.component.html',
  styleUrls: ['../inv.component.css'],
  providers: [ProductService]
})
export class InvComponent implements OnInit {
  productList: Product[];
  constructor(private router:Router,private db :AngularFireDatabase
    ,private productService : ProductService ,public dialog: MatDialog
    ,public flashMensaje: FlashMessagesService)  { }
  
  
  // constructor(private router:Router,public dialog: MatDialog)  { }
 
  public title="المخزون ";
  
  // public productList= [
  //   {'name' : 'أقلام','id':'1','quantity': 4 , 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
  //   {'name' : 'دفاتر','id':'2','quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
  //   {'name' : 'كتب','id':'3','quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
  //   {'name' : 'ألعاب','id':'4' ,'quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
  //   {'name' : 'غير ذلك','id':'6', 'quantity': 4, 'picPath': 'https://ae01.alicdn.com/kf/HTB17xsrRpXXXXaeaFXXq6xXFXXXt/-.jpg_640x640.jpg'},
  // ];

  
  ngOnInit()  {
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

  viewProduct(product: Product)
{
  let id=product.$key+","+product.name+","+product.category+","+product.cost+","+product.description+","+product.inventory+","+product.picName+","+product.picPath+","+product.price;
  this.router.navigate(['mainPage/View_Producct',id]);
}

  openDialog(item: Product): void {
    
  }
 
}


