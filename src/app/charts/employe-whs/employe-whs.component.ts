import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { productInfo,ItemInfo, shift } from '../shared/receipt.model';
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
  hasInfo=false;
 //ngOnInit
  startDate: Date=new Date();
  endDate: Date=new Date();
  items:productInfo[]=new Array();
  dataSource:MatTableDataSource<shift>=new MatTableDataSource(new Array());
  selectedValue;
  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService
) { }

  ngOnInit() {
   this.startDate.setDate(this.startDate.getDate() -7 );
   this.items=(this.reportsService.getEmployeeList());
   for(let i in this.items)
   this.selectedValue=this.items[i].$key
   this.getEmpShifts()
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
  if(true)
  {
    return;
  }
  if(this.chart.data)
  this.chart.destroy();

  let label
  let values
  this.dataSource.data.forEach(row=> {
  row.totalShiftTime
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
      let s= this.getEmpShifts()
      console.log(s)

    if(s){
     
  }else{
  this.flashMensaje.show('لم يتم بيع هذا المنتج في هذه الفترة الزمنية.',
  {cssClass: 'alert-danger', timeout: 5000});
      this.dataSource.data=[];
  }

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
getEmpShifts()
{
  let hasInfo=false
  this.dataSource.data=[]
  this.firebase.list(window.name+'/employees/'+this.selectedValue+'/workingTime').snapshotChanges().subscribe(list => {
    for(let temp of list)
    {
      console.log(typeof temp.key )
      let year = parseInt(temp.key, 10);
      let mon= temp.payload.toJSON();
      // console.log(mon)
      // console.log(mon.valueOf())
      for(let i in mon)
      {
        let month= parseInt(i, 10);
        let day=mon[i]
        for(let n in day)
        {
          var ymd =  new Date(year,month-1,parseInt(n, 10)+1)
          if(ymd <= this.startDate && ymd >= this.endDate )
          continue;
          // console.log("the date from new Date ")
          // console.log(ymd)
          // console.log(n)
          // console.log(day[n])
          let date=parseInt(n,10)
          if(ymd < this.startDate || ymd > this.endDate )//compare date with satr ang End date
          continue;
          let shifts=day[n]
          for(let s in shifts )
          {
          let temp=new shift()
          temp.date=ymd
          temp.checkIn=shifts[s].checkIn;
          temp.checkOut=shifts[s].checkOut;
          temp.totalShiftTime=shifts[s].totalShiftTime;
          hasInfo=true;
          this.dataSource.data.push(temp)
          this.dataSource._updateChangeSubscription()
          }
        }
        
      }

      
    }
  })
return hasInfo;
}

}

