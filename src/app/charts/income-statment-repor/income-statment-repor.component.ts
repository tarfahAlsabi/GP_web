import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { Receipt, InnerProduct, ItemInfo,NetIncome, Income } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

import { Chart} from'chart.js';
import { Employee } from '../../empolyee/shared/employee.model';

@Component({
  selector: 'app-income-statment-repor',
  templateUrl: './income-statment-repor.component.html',
  styleUrls: ['../sales-report/sales-report.component.css'],
  providers : [ReportsService]
})
export class IncomeStatmentReporComponent implements OnInit {
 // @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //chart
  chart = Chart; 
  paginatorLenth:number;
 

  //date
  hasDate=true;
  startDate: Date=new Date();
  endDate: Date=new Date();
 
  
 
  //report
  reportName='تقرير الإرادات والمصاريف';

  //table
  columnsIncome=['revenue','price','cost','totalIncome'];
  dataSourceIncome:MatTableDataSource<Income>=new MatTableDataSource(new Array());

  columnsNetIncome=['totalIncome','employeeSal','expences','netIncome','result'];
  dataSourceNetIncome:MatTableDataSource<NetIncome>=new MatTableDataSource(new Array());

  //report attreput
  receiptList : Receipt[];
  //products: InnerProduct[];
  price: number;
  employeeID: string[];
  totalShiftTime:number;
  checkStartD_EndD=true;
  expens;
  employee:Employee;

  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
 
   this.startDate.setMonth(this.startDate.getMonth() -1 );
   let x = this.reportsService.getData();

   //table
   this.dataSourceIncome.paginator = this.paginator;
   this.dataSourceIncome.sort = this.sort;

   this.dataSourceNetIncome.paginator = this.paginator;
   this.dataSourceNetIncome.sort = this.sort;
   //end

   this.receiptList = [];
   //this.products = [];

   x.snapshotChanges().subscribe(item =>{
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["$key"] = element.key;
      this.firebase.list(window.name+'/receipts/'+element.key+'/products').snapshotChanges().subscribe( item=> {
        item.forEach(element =>{
          var i = element.payload.toJSON();
          i["$key"] = element.key;
           y["products"].push(i as InnerProduct);
        });
      });
      var mydate = new Date((y as Receipt).date);
      y["date"] = mydate;

      this.receiptList.push(y as Receipt);
    });
  this.incom();
  
  });
 
  }

  //report or chart selections
  selectChange(evet:any)
  {
    if(evet.index==0)
    this.incom();
  }


//date
  changeDate(type: string, event: MatDatepickerInputEvent<Date>) 
{
  if(type == 'from')
    this.startDate = event.value;
    
  
  if(type == 'to'){
    var x = new Date(event.value);
    this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
    }
    this.incom();
}




incom()
{
 
  this.dataSourceIncome.data=[];
  this.dataSourceNetIncome.data=[];
 // this.products = [];
  this.employeeID =[];
  this.price = 0;
  this.totalShiftTime =0;
  this.expens =0;

  let shift:number[]=new Array();
  let cost = 0;
  

  if(this.receiptList.length != 0){
    if(this.startDate && this.endDate){
      if(this.startDate <= this.endDate){

        
        //table
        this.dataSourceIncome.data=[];
      //end
        for(let element in this.receiptList){
          let requireDate = this.receiptList[element].date;
          if( (requireDate >= this.startDate) &&  (requireDate <= this.endDate)){
            
            this.price += this.receiptList[element].totalPrice;
            this.employeeID.push(this.receiptList[element].employeeID);

            for(let element2 in this.receiptList[element].products){
              cost += (this.receiptList[element].products[element2].cost * this.receiptList[element].products[element2].quantity);
            }}
        }
        let income:Income = {revenue:'جميع المنتجات',price:this.price,cost:cost,
        totalIncome:this.price - cost};

        let netIncome = new NetIncome();
        netIncome.totalIncome=this.price - cost;

        this.dataSourceIncome.data.push(income as Income);
        this.dataSourceIncome._updateChangeSubscription();

        this.dataSourceNetIncome.data=[];
        shift = [];
        for(let emp of this.employeeID){

        this.firebase.list(window.name+'/employees/'+emp+'/workingTime').snapshotChanges().subscribe(list => {
          this.totalShiftTime *= 0;
          for(let temp of list)
          {
            let year = parseInt(temp.key, 10);
            let mon= temp.payload.toJSON();
            for(let i in mon)
            {
              let month= parseInt(i, 10);
              let day=mon[i];
              
              for(let n in day)
              {
               // console.log(n)
                var ymd =  new Date(year,month-1,parseInt(n, 10))
               // console.log(ymd <= this.startDate)
                if(ymd >= this.startDate && ymd <= this.endDate ){
                
                let shifts=day[n]
                for(let s in shifts )
                {
                let p = shifts[s].totalShiftTime.split(':')
               let h = parseInt(p[0])*60;
               let m = parseInt(p[1]);
               this.totalShiftTime +=(h+m);                
                }
                }
              }            
            }    
          }
          //i'm not sure if i can remove it
          shift.push(this.totalShiftTime);
        });
          
        this.firebase.object(window.name+'/employees/'+emp).snapshotChanges().subscribe(res =>{
          let x= res.payload.toJSON();
          x["$key"] = res.key;
          this.employee = x as Employee;
          let y = this.totalShiftTime;//if there a crash replace it withe shift[0]
           netIncome.employeeSal = (parseInt(this.employee.salary.toString())/60) * y;
        });
}//end for emp


if(this.startDate.getMonth() != this.endDate.getMonth())
  this.checkStartD_EndD = false;
  else 
  this.checkStartD_EndD =true;


this.firebase.list(window.name+'/manager/xExpenses').snapshotChanges().subscribe(res =>{
  for(let temp of res){
    let key = temp.key;
    let exp = temp.payload.toJSON();
    let array = key.split('-');

    let year = parseInt(array[1]);
    let month = parseInt(array[0]);
    let sdate = new Date(year,month-1,1);
    let x = new Date(sdate);
    let edate = new Date(x.setMonth(x.getMonth() + 1));
    edate = new Date(edate.setDate(edate.getDate() - 1));
  
   for(let r in exp){
   
    //check if it was in the selected period
    if(((sdate.getMonth()+1) >= (this.startDate.getMonth()+1)) &&  ((sdate.getMonth()+1) <= (this.endDate.getMonth()+1))){//checked
      
    //if it was in the same month  
    if(this.checkStartD_EndD && ((sdate.getMonth()+1) == (this.startDate.getMonth()+1))){//checked
      let x= this.endDate.getDate() - this.startDate.getDate(); 
      this.expens += (x*exp[r]);
    //  console.log('end: '+ (sdate.getMonth()+1))
    
    }

    //if the start date in this month
    if((!(this.checkStartD_EndD)) && ((this.startDate.getMonth()+1) == (sdate.getMonth()+1)) ){//checked
      let x= edate.getDate() - this.startDate.getDate(); 
      this.expens += (x*exp[r]);
    // console.log('month: '+(this.startDate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+this.expens)

    }

    //if the end datein this month
    if((!(this.checkStartD_EndD)) && ((this.endDate.getMonth()+1) == (sdate.getMonth()+1))){//checked
      let x= this.endDate.getDate(); 
      this.expens += (x*exp[r]);
    //  console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+this.expens)
    }

    //if the hole month is covered
    if((!(this.checkStartD_EndD)) && ((this.endDate.getMonth()+1) != (sdate.getMonth()+1)) && ((this.startDate.getMonth()+1) != (sdate.getMonth()+1))){
      let x= edate.getDate(); 
      this.expens += (x*exp[r]);
     // console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+this.expens)
    }

    }

}
  }
netIncome.expences = parseInt(Math.round(this.expens).toFixed(2));
netIncome.netIncome = netIncome.totalIncome -netIncome.employeeSal-netIncome.expences;
//netIncome.netIncome = parseInt(netIncome.netIncome.toPrecision(2));

if(netIncome.netIncome > 0)
netIncome.result='ربح';


if(netIncome.netIncome < 0)
netIncome.result='خسارة';


if(netIncome.netIncome == 0)
netIncome.result='تعادل';

        this.dataSourceNetIncome.data.push(netIncome as NetIncome);
        this.dataSourceNetIncome._updateChangeSubscription();
});

     }else{
      this.flashMensaje.show('يجب ان لا يسبق تاريخ  النهاية تاريخ البداية.',
      {cssClass: 'alert-danger', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
      }
    }else{
      this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.',
      {cssClass: 'alert-danger', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
      }
  }else{
    this.flashMensaje.show('لا تملك عمليات بيع حاليا.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }
}



}




