
import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { Receipt, InnerProduct,productInfo,ItemInfo } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

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
  paginatorLenth:number;
  reportName='تقرير مبيعات منتج  ';
  displayedColumns=['date','time','cost','quantity','price','employeename'];
  info={'date':'التاريخ','time':'وقت عملية الشراء','cost':'سعر القطعة','price':'مجموع السعر','quantity':'الكمية المباعة','employeename':'الموظف المسؤول'};
  //ngOnInit
  receiptList : Receipt[];
  products: InnerProduct[];
  //after
  newProducts : InnerProduct[];
  totalSales: number;
  temp : InnerProduct = new InnerProduct;
  startDate: Date=new Date();
  endDate: Date=new Date();
  items:productInfo[]=new Array();
  dataSource:MatTableDataSource<ItemInfo>=new MatTableDataSource(new Array());
  selectedValue;
  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService
) { }

  ngOnInit() {
   this.startDate.setDate(this.startDate.getDate() -7 );
   this.items=(this.reportsService.getProductList());
  
   this.receiptList = [];
   this.products = [];
   this.totalSales = 0;

  //console.log(this.receiptList);
  }

  selectChange(evet:any)
  {
    if(evet.index==0)
    this.changeProduct();
    else
    this.creatChart();
  }


  categorysortiong(){
    console.log('s')

    this.newProducts.sort(function(a, b) {
      return b.category.localeCompare(a.category);
    });
  }
  priceSortiong(){
    console.log('s')
    this.newProducts.sort(function(a, b) {
      return (b.quantity > a.quantity)? 1:((a.quantity > b.quantity)? -1 : 0);
    //  return b.price.toString().localeCompare(a.price.toString());
    });
  }
  quantitySortiong(){
    console.log('s')
    console.log(this.newProducts)

    this.newProducts.sort(function(a, b) {
      return (a.quantity > b.quantity)? 1:((b.quantity > a.quantity)? -1 : 0);
    });
    console.log(this.newProducts)
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

  let label =this.newProducts.map(product => product.category);
  let values=this.newProducts.map(product => product.quantity);
  this.chart = new Chart('pie', {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          data:values,
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
        responsive: true,
        legend: {
          display: false,
          position: 'right',
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              beginAtZero:true
          }
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero:true
          },
          label:"الكمية المباعة"
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
      let x:ItemInfo[];
      x =this.reportsService.getProductreceipts(this.selectedValue,this.startDate,this.endDate)
    if(true){
      this.dataSource.data =x;
      console.log(this.length(x))
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.paginator.length=(this.dataSource.data.length)
  }else{
  this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',
  {cssClass: 'alert-danger', timeout: 5000});
      this.dataSource.data=null;
  }
  //if(this.products)
   }else{
    this.flashMensaje.show('لا يجب ان يسبق تاريخ  النهاية تاريخ البداية.',
    {cssClass: 'alert-danger', timeout: 5000});
    }
  }else{
    this.flashMensaje.show('يجب عليك ادخال الفترة الزمنية أولا.',
    {cssClass: 'alert-danger', timeout: 5000});
    }
  }
  else
  {
    this.flashMensaje.show('الرجاء إختيار منتج',
    {cssClass: 'alert-danger', timeout: 5000});
  }
}
  length(item)
  {
    let m=0;
    item.forEach(element => {
      
      console.log(element);
      m++;
    });

    return m;
  }

}

  // sortData(sort: Sort) {
  //   const data = this.products.slice();
  //   if (!sort.active || sort.direction == '') {
  //     this.sortedData = data;
  //     return;
  //   }

  //   this.sortedData = data.sort((a, b) => {
  //     let isAsc = sort.direction == 'asc';
  //     switch (sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'calories': return compare(+a.calories, +b.calories, isAsc);
  //       case 'fat': return compare(+a.fat, +b.fat, isAsc);
  //       case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
  //       case 'protein': return compare(+a.protein, +b.protein, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }


