import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Receipt, InnerProduct,productInfo ,ItemInfo,empsales,shift,FBReceipt,ReceiptProduct} from './receipt.model';
import { element } from 'protractor';
import { query } from '@angular/animations';

@Injectable()
export class ReportsService {
allReceipts: AngularFireList<any>;
receiptList : Receipt[];
receipt: Receipt = new Receipt;
products: InnerProduct[];
ProductList:productInfo[];
productInfos:ItemInfo[];
emplSales:empsales[];
empShifts:shift[];
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
     let x= tem.payload.toJSON()
     temp=new productInfo();
     temp.name=x.firstName + " "+ x.lastName;
     temp.$key=tem.key;
     this.ProductList.push(temp) ;
   });
 });
      console.log(this.ProductList);  
  return this.ProductList;

}
getProductreceipts(key,startDate:Date,EndDate:Date)
{
  let total=new Array();
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
          total.push(info);
           
        }
    }
  });
  this.productInfos=total;
  console.log(total.length)
  console.log(this.productInfos)
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
        let receipt= temp.payload.toJSON()
        let date =receipt.date.split('-')
         //date[0] year , date[1] month , date[2] day
        if(date[0]<startDate.getFullYear()||date[0]>EndDate.getFullYear()||
        date[1]<startDate.getUTCMonth()+1||date[1]>EndDate.getUTCMonth()+1||
        date[2]<startDate.getDate()||date[2]>EndDate.getDate())
      {
        console.log('indside date if')
        continue; 
      }
    
        console.log('indside date else')
        let q=0;
        console.log(typeof receipt.products)
        for (var prods in receipt.products)
        {
          console.log( receipt.products[prods])
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
      console.log(list);
  })
  
    // displayedColumns=['date','time','quantity','price','pay','remains'];     
   return this.emplSales;
}
getEmpShifts(key,startDate:Date,EndDate:Date)
{
  this.empShifts=[]
  this.firebase.list(window.name+'/employees/'+key+'/workingTime').snapshotChanges().subscribe(list => {
    for(let temp of list)
    {
      console.log(typeof temp.key )
      let year = parseInt(temp.key, 10);
      if(year<startDate.getFullYear()||year>EndDate.getFullYear())
      {
      console.log('inside If')
      continue;
      }
      let mon= temp.payload.toJSON();
      console.log(mon)
      console.log(mon.valueOf())
      for(let i in mon)
      {
        console.log(i)
        let month= parseInt(i, 10);
        if( month<startDate.getUTCMonth()+1||month>EndDate.getUTCMonth()+1)
        continue;
        console.log('outside If')
        console.log(typeof mon[i])
        let day=mon[i]
        console.log(day)
        for(let n in day)
        {
          console.log(n)
          console.log(day[n])
          let date=parseInt(n,10)
          if(false)//compare date with satr ang End date
          continue;
          console.log('outside If')
          let shifts=day[n]
          for(let s in shifts )
          {
          console.log(shifts[s])
          let temp=new shift()
          temp.date=year+"-"+month+"-"+date;
        
          let p=shifts[s].checkIn.substring(11).split(':')
          temp.checkIn=p[2]+" : "+ p[1] +" : "+p[0]
         
          p=shifts[s].checkOut.substring(11).split(':')
          temp.checkOut=p[2]+" : "+ p[1] +" : "+p[0]
          temp.totalShiftTime=shifts[s].totalShiftTime;
          console.log(temp)
          this.empShifts.push(temp)
          }
        }
        
      }

      
    }
  })
  return this.empShifts;
}
}
