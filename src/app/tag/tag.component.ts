import { Component, OnInit, Inject } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../product/shared/product.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Category } from './category.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  productList: Product[];
  category: Category[];
  tempProducts: Product[];

  constructor(private router:Router , private db :AngularFireDatabase,
     public dialog: MatDialog, public flashMensaje: FlashMessagesService
    )  { }
  public title="التصنيفات";
  public AddBtn="إضافة تصنيف ";
 
  
  openDialog(category: Category): void {
    let dialogRef = this.dialog.open(viewTag, {
      width:"auto",
      data: { category: category } 
    });

  /*  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result)
      item.name = result;
    }); */
  }
delete(category: Category){
      if(confirm(' عند حذفك للتصنيف سوف تحذف جميع المنتجات هذا التصنيف هل أنت متأكد من الحذف؟ '))
      {this.db.list(window.name+'/products').remove(category.$key).then( (res) => {
        this.flashMensaje.show('.تم حذ التصنيف وجميع منتجاته بنجاح',
        {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['mainPage']);
      }).catch((err) => {
        this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.',
        {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['']);
      });
       this.category= [];
    
      } else 
        console.log('not deleted');
        
        //console.log(this.category.splice(this.category.indexOf(category)));

}
    ngOnInit() {
      this.productList = [];
      this.category= [];
      console.log( this.category);
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
    });
    //this.category.reverse();
    }
    productToggle(category:string){
      this.tempProducts = [];
      this.productList.forEach(item =>{
        if(item.category == category)
          this.tempProducts.unshift(item as Product);
      });

    }
    viewProduct(product: Product)
{
  let id=product.$key+","+product.name+","+product.category+","+product.cost+","+product.description+","+product.inventory+","+product.picName+","+product.picPath+","+product.price;
  this.router.navigate(['mainPage/View_Producct',id]);
}
    
      Add()
      {
        
          this.router.navigate(['mainPage/Add_Tag']);
      }


  }
  
//what is this ?????????????????????????
  @Component({
    selector: 'view-tag',
    templateUrl: 'view-tag.component.html',
    styleUrls: ['./tag.component.css']

  })
  export class viewTag {
  
    category: Category;

    constructor(
      public dialogRef: MatDialogRef<viewTag>,
      @Inject(MAT_DIALOG_DATA) public data: any,public db: AngularFireDatabase ) { }
  
    
   delete()
    { 
      console.log(this.category)
      if(confirm(' عند حذفك للتصنيف سوف تحذف جميع منتجات هذا التصنيف هل أنت متأكد من الحذف؟ ') == true){
      this.db.list(window.name+'/products').remove(this.category.$key);
      /*.then( (res) => {
        this.flashMensaje.show('.تم حذ التصنيف وجميع منتجاته بنجاح',
        {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['mainPage']);
      }).catch((err) => {
        this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.',
        {cssClass: 'alert-danger', timeout: 6000});
        this.router.navigate(['']);
      });*/
        }else 
        console.log('not deleted');
    }
  
  }
  