import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Sort,MatTab} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ReportsService } from '../shared/reports.service'
import { productInfo,ItemInfo, shift } from '../shared/receipt.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';
import {MatTableDataSource,MatPaginator,MatSort,MatPaginatorIntl} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart} from'chart.js'
import { promise } from 'protractor';

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
  reportName='تقرير ساعات عمل موظف  ';
 
  displayedColumns=['date','checkIn','checkOut','totalShiftTime'];
  error=false;
  x=[]
  y=[]
 //ngOnInit
  startDate: Date=new Date();
  endDate: Date=new Date();
  items:productInfo[]=new Array();
  dataSource:MatTableDataSource<shift>=new MatTableDataSource(new Array());
  selectedValue;
  constructor(private reportsService: ReportsService, private firebase: AngularFireDatabase
    ,public flashMensaje: FlashMessagesService ,private route: ActivatedRoute,
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
   this.items=(this.reportsService.getEmployeeList());

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
    if(evet.index==0)
    this.changeProduct();
    else
    {
      this.changeProduct();
     
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
    this.changeProduct();
    this.creatChart()
  

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
        labels:this.y,
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
          text: 'ساعات عمل الموظف في الفترة المحددة'
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
            labelString:"ساعات العمل",
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
getValues()
{
  this.x=[]
  this.y=[]
  let label=this.dataSource.data.map(p=>p.date.toISOString().substring(0,10))
  let values=this.dataSource.data.map(p=>p.ChartshiftTime)
 
  label.forEach(i =>{
    var sum =0
    for(let n in label)
    {
      if(label[n].localeCompare(i)==0)
      {
        
      sum = sum + values[n]
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

changeProduct()
{
  this.dataSource.data=[]

  if(this.selectedValue!=undefined)
  { 
  if(this.startDate && this.endDate){
    if(this.startDate <= this.endDate){
      this.dataSource.data=[];
      this.getEmpShifts()
      this.getValues();
    
   }else{

    this.flashMensaje.show('يجب ان لا يسبق تاريخ  النهاية تاريخ البداية.',
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

    this.flashMensaje.show('يرجى إختيار موظف',
    {cssClass: 'alert-danger', timeout: 5000});
  }
}
getEmpShifts()
{
  this.error=true;
  this.dataSource.data=[]
  this.firebase.list(window.name+'/employees/'+this.selectedValue+'/workingTime').snapshotChanges().subscribe(list => {
    for(let temp of list)
    {
      let year = parseInt(temp.key, 10);
      let mon= temp.payload.toJSON();
     
      for(let i in mon)
      {
        let month= parseInt(i, 10);
        let day=mon[i]
        for(let n in day)
        {
          var ymd =  new Date(year,month-1,parseInt(n, 10))
          if(ymd <= this.startDate && ymd >= this.endDate )
          continue;
         
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
          let p = shifts[s].totalShiftTime.split(':')
          temp.totalShiftTime=shifts[s].totalShiftTime
          temp.ChartshiftTime=(((p[0]/1)+(p[1]/100)+(p[2]/10000)))
          this.error=false
          this.dataSource.data.push(temp)
          this.dataSource._updateChangeSubscription()
          }
        }
        
      }

      
    }
    if(this.error)
    this.flashMensaje.show('لا يوجد ساعات عمل لهذا الموظف.', {cssClass: 'alert-danger', timeout: 5000});
    this.creatChart(); 
  })
    
}

}

