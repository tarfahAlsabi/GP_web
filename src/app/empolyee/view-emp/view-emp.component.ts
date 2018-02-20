import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }
name:String="أحمد الصالح ";
Id:String="MyID!";
Email:string="aa@aa.a";
phone:any=7474;
img:any='https://material.angular.io/assets/img/examples/shiba1.jpg';
salary:number=5000;

  ngOnInit() {
  }

}
