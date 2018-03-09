import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
//import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
//import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';


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
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  
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

 /* 
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
   if(this.key == element2.key)
     this.product = y as Product; 
  });
  });
  }
  this.productList = [];
});*/
  }

  onEdit() {
    let id=this.key+","+this.name+","+this.Tag+","+this.cost+","+this.description+","+this.quantity+","+this.imgName+","+this.img+","+this.price;
    //this.productService.selectedProduct = Object.assign({}, this.product);
    this.router.navigate(["mainPage/Add_Product/",id]);
  }
  delete(){
     
      if (confirm('هل أنت متأكد من حذف هذا المنتج؟') == true) {
       let s = firebase.database().ref('products/'+this.Tag).child(this.key).remove();

       if(this.imgName != 'defaultproduct.png'){
        let storageRef = firebase.storage().ref();
        storageRef.child(this.imgName).delete();
       }
         //console.log(s);
        //this.productService.deleteProduct(s as Product);
        this.router.navigate(['mainPage/product']);
      }
  }
  

}
