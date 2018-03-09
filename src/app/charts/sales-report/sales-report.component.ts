import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';


import { ReportsService } from '../shared/reports.service'
import { Receipt, InnerProduct } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
  providers : [ReportsService]
})
export class SalesReportComponent implements OnInit {
  receiptList : Receipt[];
  receipt: Receipt = new Receipt;
  products: InnerProduct[];
  newProducts : InnerProduct[];
  totalSales: number;
  temp : InnerProduct = new InnerProduct;
  
  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase) { }

  ngOnInit() {
   let x = this.reportsService.getData();

   this.receiptList = [];
   this.products = [];
   this.totalSales = 0;

   x.snapshotChanges().subscribe(item =>{
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["$key"] = element.key;
      this.firebase.list('receipts/'+element.key+'/products').snapshotChanges().subscribe( item=> {
        item.forEach(element =>{
          var i = element.payload.toJSON();
          i["$key"] = element.key;
          this.products.push(i as InnerProduct);
        });
      });
      y["products"] = this.products;
      this.totalSales += y["totalPrice"];
      this.receiptList.push(y as Receipt);

    });
  });    

  

  //console.log(this.receiptList);
  }

  s(){
    this.products.sort;
    let cat = this.products[0].category;
    let priceTemp = 0;
    let quantityTemp = 0;
    let x = 0;
    this.newProducts = [];
    console.log("out side");
  //  console.log(this.products[0]);
    let r = this.products;

    for(var element in this.products ) {
      if(!this.products.hasOwnProperty(element)){
        continue;
      }
      if(this.products[element].category == cat){
        priceTemp += (this.products[element].price * this.products[element].quantity);
        quantityTemp += this.products[element].quantity;
      }else{
        console.log("insid else");
        this.temp = {$key:"1",category: cat,price:priceTemp,quantity:quantityTemp}
        this.newProducts.push(this.temp);
        cat = this.products[element].category;
        priceTemp = this.products[element].price;
        quantityTemp = this.products[element].quantity;
      }
    }
      console.log("insid last if");
      this.temp = {$key:"1",category: cat,price:priceTemp,quantity:quantityTemp};
      this.newProducts.push(this.temp as InnerProduct);
    
    console.log(x);
    console.log(this.newProducts);
    
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
