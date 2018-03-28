import { Component, OnInit } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  productList: Product[];
  constructor(private router:Router,private db :AngularFireDatabase,private productService : ProductService)  { }
   public title="المنتجات";
   public AddBtn="إضافة منتج ";


ngOnInit() {
  this.productList = [];
  let x = this.productService.getData();
  x.snapshotChanges().subscribe(item => {
  for(var element2 in item) {
    var y = item[element2].payload.key;
  this.db.list(window.name+'/products/'+y).snapshotChanges().subscribe(element => {
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

}
