import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Receipt, InnerProduct,productInfo ,ItemInfo,empsales,shift,FBReceipt,ReceiptProduct,empInf, Income, NetIncome} from './receipt.model';
import { element } from 'protractor';
import { query } from '@angular/animations';
import {MatTableDataSource} from '@angular/material';
@Injectable()
export class ReportsService {
allReceipts: AngularFireList<any>;
receiptList : Receipt[];
receipt: Receipt = new Receipt;
products: InnerProduct[];
ProductList:productInfo[];
productInfos:ItemInfo[];
emplSales:empsales[]=new Array();
empShifts:shift[];

checkStartD_EndD = true;
x:number[];

  constructor(private firebase: AngularFireDatabase) { }

  getData(){ 
    this.allReceipts = this.firebase.list(window.name+'/receipts');
    return this.allReceipts;
  }

getProductList()
{
  var temp:productInfo=new productInfo() ;
  var product
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
getEmployeeList()
{
  var temp:productInfo=new productInfo() ;
  var product
  this.ProductList=new Array();
 let x= this.firebase.list(window.name+'/employees').snapshotChanges().subscribe(item =>
  {
   item.forEach(tem=>
    {
     let x:any= tem.payload.toJSON()
     temp=new productInfo();
     temp.name=x.firstName + " "+ x.lastName;
     temp.$key=tem.key;
     this.ProductList.push(temp) ;
   });
 });
  return this.ProductList;

}
getProductreceipts(key,startDate:Date,EndDate:Date)
{
  let total=new Array();
  this.firebase.list(window.name+'/receipts').snapshotChanges().subscribe(list => {
    for(var m in list)
    {
      let receipt :any
      receipt =list[m].payload.toJSON()
      let date =receipt.date.split('-') //date[0] year , date[1] month , date[2] day
      if(date[0]<startDate.getFullYear()||date[0]>EndDate.getFullYear()||
      date[1]<startDate.getUTCMonth()+1||date[1]>EndDate.getUTCMonth()+1||
      date[2]<startDate.getDate()||date[2]>EndDate.getDate()
    )
      continue; 
      for (var prods in receipt.products)
        if(prods == key)
        {
          let info = new ItemInfo();
          this.firebase.list(window.name+'/employees/'+receipt.employeeID).valueChanges().subscribe(emps => {      
           info.employeename=emps[1]+' ' +emps[2];
          });
          info.cost=receipt.products[prods].price;
          info.date=receipt.date;
          info.price=receipt.products[prods].price * receipt.products[prods].quantity;
          info.quantity=receipt.products[prods].quantity;
          info.time=receipt.time;
          total.push(info);
           
        }
    }
  });
  this.productInfos=total;
 
  return this.productInfos;
}
getEmployeeSales(key,startDate:Date,EndDate:Date)
{
  this.emplSales=[];
  let total=new Array();
  this.firebase.list(window.name+'/receipts',query => {let m ;
    m=query.orderByChild('employeeID').equalTo(key) ;return m}).snapshotChanges().subscribe(list => {
    
        for(let temp of list)
        {
        let receipt:any;
        receipt= temp.payload.toJSON()
        if(receipt.employeeID != key)
        continue;
       
        let date =receipt.date.split('-')
         //date[0] year , date[1] month , date[2] day
        if(date[0]<startDate.getFullYear()||date[0]>EndDate.getFullYear()||
        date[1]<startDate.getUTCMonth()+1||date[1]>EndDate.getUTCMonth()+1||
        date[2]<startDate.getDate()||date[2]>EndDate.getDate())
      {
        
        continue; 
      }
    
        let q=0;
        for (var prods in receipt.products)
        {
          q+=receipt.products[prods].quantity;
        }
        var info = new empsales()
        info.date=receipt.date;
        info.pay=receipt.ReceivedAmount;
        info.price=receipt.totalPrice;
        info.quantity=q;
        info.remains=receipt.RemainingAmount;
        info.time=receipt.time;
        info.Id=receipt.id;
        this.emplSales.push(info)       
      }
  
  })
    // displayedColumns=['date','time','quantity','price','pay','remains'];     
   return this.emplSales;
}
getEmpShifts(key,startDate:Date,EndDate:Date,source:MatTableDataSource<shift>)
{source.data=[]
  this.firebase.list(window.name+'/employees/'+key+'/workingTime').snapshotChanges().subscribe(list => {
    for(let temp of list)
    {
      let year = parseInt(temp.key, 10);
      let mon= temp.payload.toJSON();
      // console.log(mon)
      // console.log(mon.valueOf())
      for(let i in mon)
      {
        let month= parseInt(i, 10);
        let day=mon[i]
        for(let n in day)
        {
          var ymd =  new Date(year,month-1,parseInt(n, 10)+1)
          if(ymd <= startDate && ymd >= EndDate )
          continue;
          
          
          let date=parseInt(n,10)
          if(ymd < startDate || ymd > EndDate )//compare date with satr ang End date
          continue;
          let shifts=day[n]
          for(let s in shifts )
          {
          let temp=new shift()
          temp.date=ymd
          temp.checkIn=shifts[s].checkIn;
          temp.checkOut=shifts[s].checkOut;
          temp.totalShiftTime=shifts[s].totalShiftTime;
          source.data.push(temp)
          }
        }
        
      }

      
    }
  })
 
}


}
