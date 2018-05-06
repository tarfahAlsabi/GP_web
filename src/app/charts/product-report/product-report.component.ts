
import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { Receipt, InnerProduct,productInfo,ItemInfo } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort,MatPaginatorIntl} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart} from'chart.js'

@Component({
  selector: 'app-product-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['../sales-report/sales-report.component.css'],
  providers : [ReportsService]
})
export class ProductReportComponent implements OnInit {
  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  chart = Chart; 
  hasDate=true;
  hasSelection=true;
  x=[];
  y=[];
  error=false
  paginatorLenth:number;
  reportName='تقرير مبيعات منتج  ';
  displayedColumns=['date','time','cost','quantity','price','employeename'];
 //ngOnInit
  startDate: Date=new Date();
  endDate: Date=new Date();
  items:productInfo[]=new Array();
  dataSource:MatTableDataSource<ItemInfo>=new MatTableDataSource(new Array());
  selectedValue;
  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService,  private route: ActivatedRoute,
  ) { }
  

  ngOnInit() {
    let nn :MatPaginatorIntl=new MatPaginatorIntl();
    nn.itemsPerPageLabel="عدد الصفوف في الصفحة " ;
    nn.firstPageLabel="الصفحة الأولى ";
    nn.lastPageLabel="الصفحة الأخيرة " ;
    nn.nextPageLabel="الصفحة التالية";
    nn.previousPageLabel="الصفحة السابقة" ;
    nn.getRangeLabel=(page: number, pageSize: number, length: number) => { if (length == 0 || pageSize == 0) { return `0 من ${length}`; } length = Math.max(length, 0); const startIndex = page * pageSize; const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} من ${length}`; }
    this.paginator._intl=nn
   this.startDate.setDate(this.startDate.getDate() -7 );
   this.items=(this.reportsService.getProductList());
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   let emp;
   emp = this.route.snapshot.params.id;
  if(emp != null){
    this.selectedValue=emp;
    this.changeProduct();
   }

  }

  selectChange(evet:any)
  {

    this.changeProduct();

  }



  changeDate(type: string, event: MatDatepickerInputEvent<Date>) 
{
  if(type == 'from')
    this.startDate = event.value;
    
  
  if(type == 'to'){
    var x = new Date(event.value);
    this.endDate = new Date(x.getTime() );
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
          text: 'مجموع مبيعات المنتج في الفترة المحددة'
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

  if(this.selectedValue!=undefined)
  { 
  if(this.startDate && this.endDate){
    if(this.startDate <= this.endDate){

  
      this.getProductreceipts()
  //   if(true){
    
  
  // }else{
  // this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',
  // {cssClass: 'alert-danger', timeout: 5000});
  //     this.dataSource.data=null;
  // }
  //if(this.products)
   }else{
    this.flashMensaje.show('يجب ان لا يسبق تاريخ النهاية تاريخ البداية.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }
  }else{
    this.flashMensaje.show('يرجى إدخال الفترة الزمنية أولا.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }
  }
  else
  {
    this.flashMensaje.show('يرجى إختيار منتج',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
  }
}


getProductreceipts()
{
  this.error=true;
  this.dataSource.data=[]
  this.firebase.list(window.name+'/receipts').snapshotChanges().subscribe(list => {
    
    for(var m in list)
    {
      
      let receipt :any
      receipt =list[m].payload.toJSON()
      let date =receipt.date.split('-') //date[0] year , date[1] month , date[2] day
      let dd = new Date(date[0],date[1],date[2])
      let strDate=new Date(this.startDate.getFullYear(),this.startDate.getUTCMonth()+1,this.startDate.getDate())
      let endDate=new Date(this.endDate.getFullYear(),this.endDate.getUTCMonth()+1,this.endDate.getDate())
    //   if(date[0]<this.startDate.getFullYear()||date[0]>this.endDate.getFullYear()||
    //   date[1]<this.startDate.getUTCMonth()+1||date[1]>this.endDate.getUTCMonth()+1||
    //   date[2]<this.startDate.getDate()||date[2]>this.endDate.getDate()
    // )
    if(dd<strDate || dd> endDate )
      continue; 
      console.log(receipt)
      for (var prods in receipt.products)
        if(prods == this.selectedValue)
        {
          let info = new ItemInfo();
          
          info.employeename=receipt.employeeName;
          info.cost=receipt.products[prods].price;
          info.date=receipt.date;
          info.price=receipt.products[prods].price * receipt.products[prods].quantity;
          info.quantity=receipt.products[prods].quantity;
          info.time=receipt.time;
          this.dataSource.data.push(info);
          this.error=false;
           this.dataSource._updateChangeSubscription();
        }
    }

    if(this.error)
    this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',{cssClass: 'alert-danger', timeout: 5000});
    this.creatChart(); 
  });

  

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
        // console.log(label[n])
        
      sum = sum + values[n]
      // console.log(sum)
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




