import { Component, OnInit,Inject } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Category } from './category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private router:Router,private db :AngularFireDatabase
    ,private productService : ProductService ,public dialog: MatDialog
    ,public flashMensaje: FlashMessagesService)  { }
  productList: Product[];
  public title="المنتجات";
  public AddProds="إضافة منتج";
  public selected="ALLCAT";
  selectedValue: string;
  category: Category[];
  tempProducts: Product[];
  search="";
   
     searchProduct(st:string)
     {
          
     }
 delete(category: Category){
       if(confirm(' عند حذفك للتصنيف سوف تحذف جميع المنتجات هذا التصنيف هل أنت متأكد من الحذف؟ '))
       {this.db.list('products').remove(category.$key).then( (res) => {
         this.flashMensaje.show('.تم حذ التصنيف وجميع منتجاته بنجاح',
         {cssClass: 'alert-success', timeout: 100000, 
         closeOnClick: true, showCloseBtn: true});
         this.router.navigate(['mainPage']);
       }).catch((err) => {
         this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.',
         {cssClass: 'alert-danger', timeout: 100000, 
         closeOnClick: true, showCloseBtn: true});
         this.router.navigate(['']);
       });
        this.category= [];
     
       }
 }
     ngOnInit() {
       this.productList = [];
       this.category= [];
       this.db.list(window.name+'/products').snapshotChanges().subscribe(item => {
       for(var element2 in item) {
         var y = item[element2].payload.toJSON();
         y["$key"] = item[element2].key;
         this.category.unshift(y as Category);
       this.db.list(window.name+'/products/'+item[element2].key).snapshotChanges().subscribe(element => {
         element.forEach(element2 => {
         var y = element2.payload.toJSON();
         y["$key"] = element2.key;
        // y["picPath"] = this.getImg(y["picPath"]);
        this.productList.push(y as Product);
         });
       });
       }
       this.productList = [];
       this.productToggle(this.selected);
     });
     //this.category.reverse();
     }
     productToggle(category:string){
       this.tempProducts = [];
       if (category=="ALLCAT")
       this.tempProducts = this.productList;
       else
       {
         this.productList.forEach(item =>{
           if(item.category == category)
             this.tempProducts.unshift(item as Product);
         });
       }
     
     }
     viewProduct(product: Product)
 {
   let id=product.$key+","+product.name+","+product.category+","+product.cost+","+product.description+","+product.inventory+","+product.picName+","+product.picPath+","+product.price;
   this.router.navigate(['mainPage/View_Producct',id]);
 }
     
 AddCat()
       {
         
           this.router.navigate(['mainPage/Add_Tag']);
       }
 
 
   
/*getImg(url: String){
  return url.substring(0,url.indexOf(','));
}*/

  AddProd() 
  {
      let id:string ='';
      this.router.navigate(['mainPage/Add_Product/',id]);
  }
  
  openDialog(item: Product): void {
    let dialogRef = this.dialog.open(addQuantity, {
  
      data: { name: item.name,inventory:item.inventory } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
      let x = this.productService.updateProductInv(item,result);
      
      if(result > item.inventory){
        this.flashMensaje.show('تم تحديث كمية المنتج بنجاح.',
        {cssClass: 'alert-success', timeout: 100000, 
        closeOnClick: true, showCloseBtn: true});
       }

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
 