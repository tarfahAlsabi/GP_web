import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Chart} from'chart.js'
@Component({
  selector: 'app-ivc-report',
  templateUrl: './ivc-report.component.html',
  styleUrls: ['./ivc-report.component.css'],
  providers: [ProductService]
})
export class IvcReportComponent implements OnInit {
  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  chart = []; 
  productList: Product[];
  totalS =0;
  charts:any;
  bb:any;
  constructor(private db :AngularFireDatabase,private productService : ProductService)  { }
  
  ngOnInit() {
   
    this.productList = [];
    let x = this.productService.getData();
    x.snapshotChanges().subscribe(item => {
    for(var element2 in item) {
      var y = item[element2].payload.key;
    this.db.list(window.name+'/products/'+y).snapshotChanges().subscribe(element => {
      element.forEach(element2 => {
      var y = element2.payload.toJSON();
      y["$key"] = element2.key;
     this.productList.push(y as Product);
      });
    });
    }
    this.productList = [];
  });


  


  }

  totalInv()
  {
    this.totalS=0;
    var product:any
    this.productList.forEach(product =>{
     this.totalS += product.inventory;
    }) 
    return this.totalS;
  }

creatChart()
{

  let label =this.productList.map(product => product.name)
  let values=this.productList.map(product => product.inventory)
  
  this.chart = new Chart('pie', {
      type: 'pie',
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
          display: true,
          position: 'right',
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        },
        tooltips: {
          mode: 'point'
      },

      }
    });

}
}
