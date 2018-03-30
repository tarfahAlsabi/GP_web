import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Receipt, InnerProduct,productInfo ,ItemInfo} from './receipt.model';
import { element } from 'protractor';

@Injectable()
export class ReportsService {
allReceipts: AngularFireList<any>;
receiptList : Receipt[];
receipt: Receipt = new Receipt;
products: InnerProduct[];
ProductList:productInfo[];
productInfos:ItemInfo[];
  constructor(private firebase: AngularFireDatabase) { }

  getData(){ 
    this.allReceipts = this.firebase.list(window.name+'/receipts');
    return this.allReceipts;
  }

getProductList()
{
  var temp:productInfo=new productInfo() ;
  var product
  let allprods: AngularFireList<any>;
  this.ProductList=new Array();
  this.firebase.list(window.name+'/products').valueChanges().subscribe(list => {
    
    list.forEach(category => {
      for(product in category )  
     {
       temp=new productInfo();
      temp.name=category[product].name;
      temp.$key=product ;
      // console.log(temp);
      this.ProductList.push(temp) ;
      };
    });
  });
  return this.ProductList;
}

getProductreceipts(key,startDate:Date,EndDate:Date)
{
  this.productInfos=[];
  this.firebase.list(window.name+'/receipts').valueChanges().subscribe(list => {
    for(var receipt in list)
    {
      let date =list[receipt].date.split('-') //date[0] year , date[1] month , date[2] day
      if(date[0]<startDate.getFullYear()||date[0]>EndDate.getFullYear()||
      date[1]<startDate.getUTCMonth()+1||date[1]>EndDate.getUTCMonth()+1||
      date[2]<startDate.getDate()||date[2]>EndDate.getDate()
    )
      continue; 

      for (var prods in list[receipt].products)
        if(prods == key)
        {
          let info = new ItemInfo();
          this.firebase.list(window.name+'/employees/'+list[receipt].employeeID).valueChanges().subscribe(emps => {      
           info.employeename=emps[1]+' ' +emps[2];
          });
          info.cost=list[receipt].products[prods].price;
          info.date=list[receipt].date;
          info.price=list[receipt].products[prods].price * list[receipt].products[prods].quantity;
          info.quantity=list[receipt].products[prods].quantity;
          info.time=list[receipt].time;
          this.productInfos.push(info);
        }
    }
  });
  console.log(this.productInfos)
  return this.productInfos;
}

}
