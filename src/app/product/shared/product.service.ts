import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Product } from './product.model';
import * as firebase from 'firebase';


@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product(); 


  constructor(private db :AngularFireDatabase,private firebase : AngularFireDatabase) { }
  
  getData(){
    this.productList = this.db.list(window.name+'/products');
    return this.productList;
  }

  insertProduct(product : Product, path: string,fileName: string) 
  {
    if(path == 'none'){
      product.picPath = 'https://firebasestorage.googleapis.com/v0/b/erad-system.appspot.com/o/defaultproduct.png?alt=media&token=cea248b8-83e4-4090-8a0f-872f68fc1b1e';
      product.picName = 'defaultproduct.png'
    }else{
      product.picPath = path;
      product.picName = fileName;
    }

      if(product.description == ''){
        product.description = "لايوجد وصف";
      }
      if(product.category == ''){
        product.category = "أخرى";
      }

    this.firebase.list(window.name+'/products/'+ product.category).push({
      name: product.name,
      price: product.price,
      cost: product.cost,
      inventory: product.inventory,
      description: product.description,
      category: product.category,
      picPath: product.picPath,
      picName: product.picName
    });

  }
 
  updateProduct(product : Product, path: string,fileName: string){

    if(path != 'none'){
        this.deletePicFromStorage(product.picPath)
        product.picPath = path
        product.picName = fileName;
    }
    
    this.firebase.list(window.name+'/products/'+ product.category).update(product.$key,
      {
        name: product.name,
        price: product.price,
        cost: product.cost,
        inventory: product.inventory,
        description: product.description,
        category: product.category,
        picPath: product.picPath,
        picName: product.picName
      });
  } 
 
  deleteProduct(product : Product){
    this.firebase.list(window.name+'/products/'+ product.category).remove(product.$key);
    this.deletePicFromStorage(product.picName);
  }
  deletePicFromStorage(picName: string){
    //let fileName = picPath.substring(picPath.indexOf(',')+1);
    
    if(picName != 'defaultproduct.png'){
      let storageRef = firebase.storage().ref();
      storageRef.child(picName).delete();
    }
  }

  updateProductInv(product : Product, newInv: number){

    this.firebase.list(window.name+'/products/'+ product.category).update(product.$key,
      {
        inventory: newInv,
      });
  } 
 
}


