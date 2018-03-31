import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { productInfo,ItemInfo } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';

import { Chart} from'chart.js'

@Component({
  selector: 'app-employe-whs',
  templateUrl: './employe-whs.component.html',
  styleUrls: ['../sales-report/sales-report.component.css'],
  providers : [ReportsService]
})
export class EmployeWhsComponent implements OnInit {


  @ViewChild("pie", {read: ElementRef}) pie:ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  chart = Chart; 
  hasDate=true;
  hasSelection=true;
  paginatorLenth:number;
  reportName='تقرير مبيعات موظف  ';
  displayedColumns=['date','checkIn','checkOut','totalShiftTime'];
 //ngOnInit
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
   this.items=(this.reportsService.getEmployeeList());
   this.dataSource.paginator = this.paginator;
  
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
  if(true)
  {
    return;
  }
  if(this.chart.data)
  this.chart.destroy();

  let label
  let values
  this.dataSource.data.forEach(row=> {
  row.price
  }
  )
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
      let x=[];
  
      x=this.reportsService.getEmpShifts(this.selectedValue,this.startDate,this.endDate)
    if(true){
      this.dataSource.data =x;
      console.log(x)

      this.dataSource.sort = this.sort;
      
  }else{
  this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',
  {cssClass: 'alert-danger', timeout: 5000});
      this.dataSource.data=[];
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

}

