import { Component, OnInit, Inject ,ViewChild} from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../product/shared/product.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Category } from './category.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['../charts/sales-report/sales-report.component.css']
})
export class TagComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  productList: Product[];
  category: Category[];
  tempProducts: Product[];
  public title="إدارة التصنيفات";
  displayedColumns=['name','edit','delete'];
  dataSource:MatTableDataSource<Category>=new MatTableDataSource(new Array());
  constructor(private router:Router , private db :AngularFireDatabase,
     public dialog: MatDialog, public flashMensaje: FlashMessagesService )  { }
     

  ngOnInit() {
      
    this.dataSource.data= [];
    this.db.list(window.name+'/products').snapshotChanges().subscribe(item => {
      this.dataSource.data= [];  
    for(var element2 in item) {
      var y = item[element2].payload.toJSON();
      y["$key"] = item[element2].key;
      this.dataSource.data.unshift(y as Category);
      this.dataSource._updateChangeSubscription()
    }  

  });
  //this.category.reverse();
  }
delete(category: Category){
  let dialogRef = this.dialog.open(confirmDialog, {
    data: { name:category.$key }
  });

  dialogRef.afterClosed().subscribe(result => {
    
    if(result!=null)
    {
      {this.db.list(window.name+'/products').remove(category.$key).then( (res) => {
        this.flashMensaje.show('.تم حذ التصنيف وجميع منتجاته بنجاح',
        {cssClass: 'alert-success', timeout: 40000});
        
      }).catch((err) => {
        this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.',
        {cssClass: 'alert-danger', timeout: 40000});
        
      });
       this.category= [];
    
      }
    }
    else
    {
    }
  });   
}
 
edit(category:Category)
{

  let dialogRef = this.dialog.open(viewTag, { data: { name:category.$key } });

  dialogRef.afterClosed().subscribe(result => {
   
    if(result!=null)
    {
      this.db.list(window.name+'/products/'+category.$key).snapshotChanges().subscribe(prods=>
      {
        prods.forEach(prod => {
          var product:any =(prod.payload.toJSON());
          this.db.list(window.name+'/products/'+ result).push({
            name: product.name,
            price: product.price,
            cost: product.cost,
            inventory: product.inventory,
            description: product.description,
            category: result,
            picPath: product.picPath,
            picName: product.picName
            
          });
        });
        {this.db.list(window.name+'/products').remove(category.$key).then( (res) => {
          this.flashMensaje.show('تم تحديث التصنيف بنجاح',
          {cssClass: 'alert-success', timeout: 40000});
          
        }).catch((err) => {
          this.flashMensaje.show('حدثت مشكلة أثناء عملية الحذف أرجو المحاولة مرة أخرى.',
          {cssClass: 'alert-danger', timeout: 40000});
        
        });
         this.category= [];
      
        }
      });

    }
  });

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
  }
  

  @Component({
    selector: ' confirmDialog',
    templateUrl: 'confirmDialog.component.html',
    styleUrls: ['./tag.component.css']

  })
  export class confirmDialog
  {
    constructor(
      public dialogRef: MatDialogRef<viewTag>,
      @Inject(MAT_DIALOG_DATA) public data: any,public db: AngularFireDatabase ) { } 
  }
