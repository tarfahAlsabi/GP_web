import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  salesReport(){
    this.router.navigate(['mainPage/sales-report']);
  }
  INVReport(){
    this.router.navigate(['mainPage/Inventory report']);
  }
  productReport(){
    this.router.navigate(['mainPage/productReport']);
  }
  EmpSalesReport(){
    this.router.navigate(['mainPage/Employee sales']);
  }
  EmpWHs(){
    this.router.navigate(['mainPage/Employee working report']);
  }
  IncomeStatmentReport(){
    this.router.navigate(['mainPage/income_statment']);
  }
  FinanceReport(){
    this.router.navigate(['mainPage/finance_report']);
  }
  
  
}
