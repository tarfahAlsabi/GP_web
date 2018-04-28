import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Finance } from '../../finance/finance.model';
import { Receipt, InnerProduct, NetIncome, Assets, Liabilities } from '../shared/receipt.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';


@Component({
  selector: 'app-finance-report',
  templateUrl: './finance-report.component.html',
  styleUrls: ['../sales-report/sales-report.component.css'],
})
export class FinanceReportComponent implements OnInit {

  reportName = 'تقرير قائمة الدخل'
  finance:Finance = new Finance;
  checkStartD_EndD =true;
  receiptList : Receipt[];
  //date
  hasDate=true;
  startDate: Date=new Date();
  endDate: Date=new Date();

  //table
 
  allcolumns=['box','bank','Debtors','fixedAssets','capital','loans','creditors']
  dataSourceIncome:MatTableDataSource<Assets>=new MatTableDataSource(new Array());

  constructor(private firebase: AngularFireDatabase,public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
    this.startDate.setMonth(this.startDate.getMonth() -1 );

    this.firebase.object(window.name+'/manager/xFinance').snapshotChanges().subscribe(ob =>{
      let x = ob.payload.toJSON();
      x["$key"] = ob.key;
      this.finance = x as Finance;
      
    });
    this.receiptList = [];
    //this.products = [];
 
    this.firebase.list(window.name+'/receipts').snapshotChanges().subscribe(item =>{
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
 
  let employeeID:string[];
  let price = 0;
  let totalShiftTime =0;
  let expens =0;
  this.dataSourceIncome.data
  let shift:number[]=new Array();
  let cost = 0;

  employeeID =[];
  shift=[];
  if(this.receiptList.length != 0){
    if(this.startDate && this.endDate){
      if(this.startDate <= this.endDate){
        
        for(let element in this.receiptList){
          let requireDate = this.receiptList[element].date;
          if( (requireDate >= this.startDate) &&  (requireDate <= this.endDate)){
            
            price += this.receiptList[element].totalPrice;
            employeeID.push(this.receiptList[element].employeeID);

            for(let element2 in this.receiptList[element].products)
              cost += (this.receiptList[element].products[element2].cost * this.receiptList[element].products[element2].quantity);
            }
        }
        let netIncome = new NetIncome();
        netIncome.totalIncome=price - cost;

        shift = [];
        for(let emp of employeeID){

        this.firebase.list(window.name+'/employees/'+emp+'/workingTime').snapshotChanges().subscribe(list => {
          totalShiftTime *= 0;
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
                var ymd =  new Date(year,month-1,parseInt(n, 10))
                if(ymd >= this.startDate && ymd <= this.endDate ){
                
                let shifts=day[n]
                for(let s in shifts )
                {
                let p = shifts[s].totalShiftTime.split(':')
               let h = parseInt(p[0])*60;
               let m = parseInt(p[1]);
               totalShiftTime +=(h+m);                
                }
                }
              }            
            }    
          }
          //i'm not sure if i can remove it
          shift.push(totalShiftTime);
        });
          
        this.firebase.list(window.name+'/employees/'+emp).snapshotChanges().subscribe(res =>{
          let x= res[7].payload.toJSON();
          let y = totalShiftTime;//if there a crash replace it withe shift[0]
           netIncome.employeeSal = (parseInt(x.toString())/60) * y;
          });
}//end for emp


if(this.startDate.getMonth() != this.endDate.getMonth())
  this.checkStartD_EndD = false;
  else 
  this.checkStartD_EndD =true;

  this.dataSourceIncome.data=[]

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
      expens += (x*exp[r]);
    //  console.log('end: '+ (sdate.getMonth()+1))
    
    }

    //if the start date in this month
    if((!(this.checkStartD_EndD)) && ((this.startDate.getMonth()+1) == (sdate.getMonth()+1)) ){//checked
      let x= edate.getDate() - this.startDate.getDate(); 
      expens += (x*exp[r]);
    // console.log('month: '+(this.startDate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+expens)

    }

    //if the end datein this month
    if((!(this.checkStartD_EndD)) && ((this.endDate.getMonth()+1) == (sdate.getMonth()+1))){//checked
      let x= this.endDate.getDate(); 
      expens += (x*exp[r]);
    //  console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+expens)
    }

    //if the hole month is covered
    if((!(this.checkStartD_EndD)) && ((this.endDate.getMonth()+1) != (sdate.getMonth()+1)) && ((this.startDate.getMonth()+1) != (sdate.getMonth()+1))){
      let x= edate.getDate(); 
      expens += (x*exp[r]);
     // console.log('month: '+(edate.getMonth()+1)+' defrencese:'+x+' number:'+exp[r]+' sum:'+expens)
    }
  }
  
}
}
netIncome.expences = parseInt(Math.round(expens).toFixed(2));
netIncome.netIncome = netIncome.totalIncome -netIncome.employeeSal-netIncome.expences;

if(netIncome.netIncome > 0){
netIncome.result='ربح';
this.finance.capital += netIncome.netIncome;
}

if(netIncome.netIncome < 0){
netIncome.result='خسارة';
this.finance.capital = netIncome.netIncome - this.finance.capital;
}

if(netIncome.netIncome == 0)
netIncome.result='تعادل';


this.dataSourceIncome.data.push(this.finance as Assets);
this.dataSourceIncome._updateChangeSubscription();

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
