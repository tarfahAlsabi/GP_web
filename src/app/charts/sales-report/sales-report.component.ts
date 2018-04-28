import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab, MatPaginatorIntl} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


import { ReportsService } from '../shared/reports.service'
import { Receipt, InnerProduct } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Chart} from'chart.js';

import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';


@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
  providers : [ReportsService]
})
export class SalesReportComponent implements OnInit {
  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  chart = Chart; 
  hasDate=true;
  hasSelection=false;
  reportName='تقرير المبيعات ';
  tableheader=[ 'التصنيف','الكمية المباعة' ,'الربح'];
  //ngOnInit
  receiptList : Receipt[];
  products: InnerProduct[];
  //after
  newProducts : InnerProduct[];
  totalSales: number;
  temp : InnerProduct = new InnerProduct;
  startDate: Date=new Date();
  endDate: Date=new Date();

  //table
  paginatorLenth:number;
  displayedColumns=['name', 'quantity', 'price', 'cost', 'totalIncome'];
  dataSource:MatTableDataSource<InnerProduct>=new MatTableDataSource(new Array());



  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService
) { }

  ngOnInit() {
   this.startDate.setMonth(this.startDate.getMonth() -1 );
   let x = this.reportsService.getData();

   let nn :MatPaginatorIntl=new MatPaginatorIntl();
   nn.itemsPerPageLabel="عدد الصفوف في الصفحة " ;
   nn.firstPageLabel="الصفحة الأولى ";
   nn.lastPageLabel="الصفحة الأخيرة " ;
   nn.nextPageLabel="الصفحة التالية";
   nn.previousPageLabel="الصفحة السابقة" ;
   nn.getRangeLabel=(page: number, pageSize: number, length: number) => { if (length == 0 || pageSize == 0) { return `0 من ${length}`; } length = Math.max(length, 0); const startIndex = page * pageSize; const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} من ${length}`; }
   this.paginator._intl=nn
   //table
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   //end

   this.receiptList = [];
   this.products = [];
   this.totalSales = 0;

   x.snapshotChanges().subscribe(item =>{
    item.forEach(element => {
      var y = element.payload.toJSON();
    //  this.products = [];
      y["$key"] = element.key;
      this.firebase.list(window.name+'/receipts/'+element.key+'/products').snapshotChanges().subscribe( item=> {
        item.forEach(element =>{
          var i = element.payload.toJSON();
          i["$key"] = element.key;
      //    this.products.push(i as InnerProduct);
           //add the array of products
           y["products"].push(i as InnerProduct);
        });
      });
     
     this.totalSales += y["totalPrice"];

    //convert date to specific format (wen mar 07 2018)
      var mydate = new Date((y as Receipt).date);
     // console.log(mydate);
      y["date"] = mydate;

      this.receiptList.push(y as Receipt);
      //console.log((y as Receipt).date);
    });
  this.sales();
  
  });
 
  }

  selectChange(evet:any)
  {
    if(evet.index==0)
    this.sales();
    else
    this.creatChart();
  }
sales(){
  //console.log(this.receiptList[2].products);
  this.dataSource.data=[]
  this.products = [];
  if(this.receiptList.length != 0){
    if(this.startDate && this.endDate){
      if(this.startDate <= this.endDate){

        this.totalSales = 0;
        this.newProducts = [];
        //table
        this.dataSource.data=[];
      //end
        for(let element in this.receiptList){
          let requireDate = this.receiptList[element].date;
          if( (requireDate >= this.startDate) &&  (requireDate <= this.endDate)){
            this.totalSales += this.receiptList[element].totalPrice;
            for(let element2 in this.receiptList[element].products)
            this.products.push(this.receiptList[element].products[element2] as InnerProduct);
          }
        }
      if(this.products.length != 0){
      this.products.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
      let name = this.products[0].name;
      let priceTemp = 0;
      let quantityTemp = 0;
      let costTemp = 0;
      let x = 0;
      this.newProducts = [];
      //table
      this.dataSource.data=[];
      //end
     // console.log(this.products[0]);
      let r = this.products;

      for(var element in this.products ) {
        if(!this.products.hasOwnProperty(element)){
          continue;
        }
        if(this.products[element].name == name){
          priceTemp += (this.products[element].price * this.products[element].quantity);
          costTemp += (this.products[element].cost * this.products[element].quantity);
          quantityTemp += this.products[element].quantity;
        }else{
          this.temp = {$key:"1",name: name,price:priceTemp,cost:costTemp,quantity:quantityTemp,
          totalIncome: priceTemp - costTemp}
          this.newProducts.push(this.temp as InnerProduct);

          //table
          this.dataSource.data.push(this.temp as InnerProduct);
          this.dataSource._updateChangeSubscription();
          //end

          name = this.products[element].name;
          priceTemp = this.products[element].price;
          costTemp = this.products[element].cost;
          quantityTemp = this.products[element].quantity;
        }
      }
      this.temp = {$key:"1",name: name,price:priceTemp,cost:costTemp,quantity:quantityTemp,
      totalIncome: priceTemp - costTemp};
      this.newProducts.push(this.temp as InnerProduct);

      //table
      this.dataSource.data.push(this.temp as InnerProduct);
      this.dataSource._updateChangeSubscription();
      //end
  
     // console.log(x);
     // console.log(this.newProducts);
    }else{
    this.flashMensaje.show('لا يوجد فواتير في هذه الفترة الزمنية.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }
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
  }else{
    this.flashMensaje.show('لا تملك عمليات بيع حاليا.',
    {cssClass: 'alert-danger', timeout: 100000, 
    closeOnClick: true, showCloseBtn: true});
    }


}



  changeDate(type: string, event: MatDatepickerInputEvent<Date>) 
{
  if(type == 'from')
    this.startDate = event.value;
    
  
  if(type == 'to'){
    var x = new Date(event.value);
    this.endDate = new Date(x.getTime() + (1000 * 60 * 60 * 24));
    }
    this.sales();
    this.creatChart();
  /*  var mydate = new Date('2018-03-02');
    console.log(mydate.toDateString());*/

}


creatChart()
{
  if(this.chart.data)
  this.chart.destroy();

  let label =this.newProducts.map(product => product.name);
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
            scaleLabel :
            {
            labelString:"المنتجات",
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
            labelString:"الكمية المبيعة ",
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
}
