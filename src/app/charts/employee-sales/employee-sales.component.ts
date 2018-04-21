import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { productInfo,ItemInfo,empsales } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

import { Chart} from'chart.js'

@Component({
  selector: 'app-employee-sales',
  templateUrl: './employee-sales.component.html',
  styleUrls: ['../sales-report/sales-report.component.css'],
  providers : [ReportsService]
})
export class EmployeeSalesComponent implements OnInit {

  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  chart = Chart; 
  hasDate=true;
  hasSelection=true;
  paginatorLenth:number;
  reportName='تقرير مبيعات موظف  ';
  displayedColumns=['Id','date','time','quantity','price','pay','remains'];
 //ngOnInit
 x=[];
 y=[];
  startDate: Date=new Date();
  endDate: Date=new Date();
  items:productInfo[]=new Array();
  dataSource:MatTableDataSource<empsales>=new MatTableDataSource(new Array());
  selectedValue;
  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService
) { }

  ngOnInit() {
   this.startDate.setDate(this.startDate.getDate() -7 );
   this.items=(this.reportsService.getEmployeeList());
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  //console.log(this.receiptList);
  }

  selectChange(evet:any)
  {
    if(evet.index==0)
    this.changeProduct();
    else
    this.creatChart();
  }



  changeDate(type: string, event: MatDatepickerInputEvent<Date>) 
{
  if(type == 'from')
    this.startDate = event.value;
    
  
  if(type == 'to'){
    var x = new Date(event.value);
    this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
    }
    this.changeProduct();
    // this.creatChart();
  /*  var mydate = new Date('2018-03-02');
    console.log(mydate.toDateString());*/

}


creatChart()
{
 
  if(this.chart.data)
  this.chart.destroy();
  // this.changeProduct()
  this.getValues()
  this.chart = new Chart('pie', {
      type: 'line',
      data: {
        labels: this.y,
        datasets: [{
          data:this.x,
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(102, 153, 255,0.4)',
            'rgba(255, 51, 153,0.4)',
            'rgba(255, 102, 0, 0.4)',
            'rgba(51, 102, 255,0.4)',
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(102, 153, 255, 1)',
            'rgba(255, 51, 153, 1)',
            'rgba(255, 102, 0, 1)',
            'rgba(51, 102, 255, 1)',
        ],
        }]
      },
      options: {
        title: {
          display: true,
          text: 'مجموع مبيعات الموظف في الفترة المحددة'
      },
        responsive: true,
        legend: {
          display: false,
          position: 'right',
        },
        scales: {
          xAxes: [{
            scaleLabel :
            {
            labelString:"التاريخ  ",
            display: true,
            },
            ticks: {
              beginAtZero:true
          }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero:true
          },
          scaleLabel :
            {
            labelString:"مجموع المبيعات في اليوم  ",
            display: true,
            },
          }],
        },
        tooltips: {
          mode: 'point'
      },

      }
    });
}


changeProduct()
{
  console.log(this.selectedValue)

  if(this.selectedValue!=undefined)
  { 
  if(this.startDate && this.endDate){
    if(this.startDate <= this.endDate){
      
  
     this.getEmployeeSales()
  //   if(true){
  //     this.dataSource.data =x;
  //     console.log(x)

  //     this.dataSource.sort = this.sort;
      
  // }else{
  // this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',
  // {cssClass: 'alert-danger', timeout: 5000});
  //     this.dataSource.data=[];
  // }
  //if(this.products)
   }else{
    this.flashMensaje.show('لا يجب ان يسبق تاريخ  النهاية تاريخ البداية.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }
  }else{
    this.flashMensaje.show('يجب عليك ادخال الفترة الزمنية أولا.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }
  }
  else
  {
    this.flashMensaje.show('الرجاء إختيار منتج',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
  }
}

// this.selectedValue,this.this.startDate,this.endDate

getEmployeeSales()
{
  this.dataSource.data=[]
  var emplSales=[];
  let total=new Array();
  this.firebase.list(window.name+'/receipts',query => {let m ;
    m=query.orderByChild('employeeID').equalTo(this.selectedValue) ;return m}).snapshotChanges().subscribe(list => {
    
        for(let temp of list)
        {
        let receipt:any;
        receipt= temp.payload.toJSON()
        if(receipt.employeeID != this.selectedValue)
        continue;
        console.log("inside" )
        console.log(receipt)
        let date =receipt.date.split('-')
         //date[0] year , date[1] month , date[2] day
        if(date[0]<this.startDate.getFullYear()||date[0]>this.endDate.getFullYear()||
        date[1]<this.startDate.getUTCMonth()+1||date[1]>this.endDate.getUTCMonth()+1||
        date[2]<this.startDate.getDate()||date[2]>this.endDate.getDate())
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
        this.dataSource.data.push(info)   
        this.dataSource._updateChangeSubscription()    
      }
  
  })
  console.log(this.dataSource.data);
    // displayedColumns=['date','time','quantity','price','pay','remains'];      
}




getValues()
{
  this.x=[]
  this.y=[]
  let label=this.dataSource.data.map(p=>p.date)
  let values=this.dataSource.data.map(p=>p.price)
  label.forEach(i =>{
    var sum =0
    for(let n in label)
    {
      if(label[n].localeCompare(i)==0)
      {
        console.log(label[n])
        
      sum = sum + values[n]
      console.log(sum)
      values[n]=0
      label[n]=''
      }
  
    }
    if(i!='')
    {
   this. x.push(sum)
   this.y.push(i)
    i=''
    }
  })

}
}

