import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {MatTableDataSource,MatPaginator,MatSort,MatPaginatorIntl} from '@angular/material';

import { Chart} from'chart.js'
@Component({
  selector: 'app-ivc-report',
  templateUrl: './ivc-report.component.html',
  styleUrls: ['../../charts/sales-report/sales-report.component.css'],
  providers: [ProductService]
})
export class IvcReportComponent implements OnInit {
  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource:MatTableDataSource<Product>=new MatTableDataSource(new Array());
  chart :Chart; 
  productList: Product[];
  totalS =0;
// charts:any;
  bb:any;

  reportName='تقرير مبيعات موظف  ';
  displayedColumns=['category','name','inventory','cost','price'];
 //ngOnInit
 x=[];
 y=[];
  startDate: Date=new Date();
  endDate: Date=new Date();

  constructor(private db :AngularFireDatabase,private productService : ProductService)  { }
  
  ngOnInit() {
    let nn :MatPaginatorIntl=new MatPaginatorIntl();
    nn.itemsPerPageLabel="عدد الصفوف في الصفحة " ;
    nn.firstPageLabel="الصفحة الأولى ";
    nn.lastPageLabel="الصفحة الأخيرة " ;
    nn.nextPageLabel="الصفحة التالية";
    nn.previousPageLabel="الصفحة السابقة" ;
    nn.getRangeLabel=(page: number, pageSize: number, length: number) => { if (length == 0 || pageSize == 0) { return `0 من ${length}`; } length = Math.max(length, 0); const startIndex = page * pageSize; const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} من ${length}`; }
    this.paginator._intl=nn
   this.dataSource.paginator=this.paginator
   this.dataSource.sort=this.sort
    this.dataSource.data = [];
    let x = this.productService.getData();
    x.snapshotChanges().subscribe(item => {
    for(var element2 in item) {
      var y = item[element2].payload.key;
    this.db.list(window.name+'/products/'+y).snapshotChanges().subscribe(element => {
      element.forEach(element2 => {
      var y = element2.payload.toJSON();
      y["$key"] = element2.key;
     this.dataSource.data.push(y as Product);
     this.dataSource._updateChangeSubscription();
      });
    });
    }
  });


  this.totalInv()
  this.creatChart()
  }

  totalInv()
  {
    this.totalS=0;
    var product:any
    this.dataSource.data.forEach(product =>{
     this.totalS += product.inventory;
    }) 
    return this.totalS;
  }
  selectChange(evet:any)
  {
    if(evet.index!=0)
    this.creatChart();
  }
creatChart()
{
  let label =this.dataSource.data.map(product => product.name)
  let values=this.dataSource.data.map(product => product.inventory)
  
  if(this.chart!=null )
  if(this.chart.data)
  this.chart.destroy();


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
          labelString:"الكمية المتوفرة ",
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
}
