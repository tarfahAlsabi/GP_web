import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatTableDataSource} from '@angular/material';


import { ReportsService } from '../shared/reports.service'
import { Receipt, InnerProduct } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Chart} from'chart.js'

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
  providers : [ReportsService]
})
export class SalesReportComponent implements OnInit {
  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
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


  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService
) { }

  ngOnInit() {
   this.startDate.setMonth(this.startDate.getMonth() -1 );
   let x = this.reportsService.getData();

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
  this.s();
  
  });
   

  //console.log(this.receiptList);

 
  }

  selectChange(evet:any)
  {
    if(evet.index==0)
    this.s();
    else
    this.creatChart();
  }
s(){
  //console.log(this.receiptList[2].products);
  this.products = [];
  if(this.receiptList.length != 0){
    if(this.startDate && this.endDate){
      if(this.startDate <= this.endDate){

        this.totalSales = 0;
        this.newProducts = [];

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
        return a.category.localeCompare(b.category);
      });
      let cat = this.products[0].category;
      let priceTemp = 0;
      let quantityTemp = 0;
      let x = 0;
      this.newProducts = [];
     // console.log(this.products[0]);
      let r = this.products;

      for(var element in this.products ) {
        if(!this.products.hasOwnProperty(element)){
          continue;
        }
        if(this.products[element].category == cat){
          priceTemp += (this.products[element].price * this.products[element].quantity);
          quantityTemp += this.products[element].quantity;
        }else{
          this.temp = {$key:"1",category: cat,price:priceTemp,quantity:quantityTemp}
          this.newProducts.push(this.temp as InnerProduct);
          cat = this.products[element].category;
          priceTemp = this.products[element].price;
          quantityTemp = this.products[element].quantity;
        }
      }
      this.temp = {$key:"1",category: cat,price:priceTemp,quantity:quantityTemp};
      this.newProducts.push(this.temp as InnerProduct);
  
     // console.log(x);
     // console.log(this.newProducts);
    }else{
    this.flashMensaje.show('لا يوجد فواتير في هذه الفترة الزمنية.',
    {cssClass: 'alert-danger', timeout: 5000});
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
  }else{
    this.flashMensaje.show('لا تملك عمليات بيع حاليا.',
    {cssClass: 'alert-danger', timeout: 5000});
    }

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
    this.s();
    this.creatChart();
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
