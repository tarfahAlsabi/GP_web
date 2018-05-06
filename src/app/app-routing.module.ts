import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { Route } from '@angular/router/src/config';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { ProductComponent } from './product/product.component';

import { ViewInv } from './product/Inv.component';
import { HeaderComponent } from './header/header.component';
import { MyFormComponent } from './my-form/my-form.component';
import { AddEmpComponent } from './empolyee/add-emp/add-emp.component';
import { ViewEmpComponent } from './empolyee/view-emp/view-emp.component';


import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';


import { TagComponent } from './tag/tag.component';
import { AddTagComponent } from './tag/add-tag/add-tag.component';
import { ViewTagComponent } from './tag/view-tag/view-tag.component';


import { HomePageComponent } from './home-page/home-page.component';

import { ChartsComponent } from './charts/charts.component';
import { SalesReportComponent } from './charts/sales-report/sales-report.component';
import { NoFoundPageComponent } from './control/no-found-page/no-found-page.component';

import { IvcReportComponent } from './product/ivc-report/ivc-report.component';

import { ManagerComponent } from './manager/manager.component';
import { ProductReportComponent } from './charts/product-report/product-report.component';

import { EmployeeSalesComponent } from './charts/employee-sales/employee-sales.component';
import { EmployeWhsComponent } from './charts/employe-whs/employe-whs.component';
import { EditManagerComponent } from './manager/edit-manager/edit-manager.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeStatmentReporComponent } from './charts/income-statment-repor/income-statment-repor.component';
import { FinanceComponent } from './finance/finance.component';
import { FinanceReportComponent } from './charts/finance-report/finance-report.component';



import { MainHomeComponent } from './home-page/main-home/main-home.component';
import { FeatursComponent } from './home-page/featurs/featurs.component';
import { CostumersComponent } from './home-page/costumers/costumers.component';
import { RegisterComponent } from './home-page/register/register.component';
import { LogInComponent } from './home-page/log-in/log-in.component';


const routes: Routes = [
    {path: '', component: HomePageComponent,children:
        [
            {path:'',redirectTo: ' ',pathMatch: 'full'},
            {path: ' ' , component: MainHomeComponent },
            {path: 'features' , component: FeatursComponent },
            {path: 'LogIn' , component: LogInComponent },
            {path: 'register' , component: RegisterComponent },
            {path: 'customer' , component: CostumersComponent },
        ]},
    {path: 'mainPage', component: HeaderComponent ,children: [
        {path:'',redirectTo: 'manager',pathMatch: 'full'},
        {path: 'productReport' , component: ProductReportComponent },       
        {path: 'productReport/:id' , component: ProductReportComponent },         
        {path: 'empolyee' , component: EmpolyeeComponent },
        {path: 'product', component: ProductComponent},
        {path: 'Employee working report', component: EmployeWhsComponent},
        {path: 'Employee working report/:id', component: EmployeWhsComponent},
        {path: 'Employee sales', component: EmployeeSalesComponent},
        {path: 'Employee sales/:id', component: EmployeeSalesComponent},
        {path: 'tags', component: TagComponent},
        {path: 'addQuantity', component: ViewInv},
        {path: 'charts', component: ChartsComponent},
        {path: 'Add_employee', component: AddEmpComponent},
        {path: 'Add_Tag', component: AddTagComponent},
        {path: 'Add_Product/:id', component: AddProductComponent},
        {path: 'Add_Product', component: AddProductComponent},
        {path: 'View_employee/:id', component: ViewEmpComponent},
        {path: 'View_Tag/:id', component: ViewTagComponent},
        {path: 'View_Producct/:id', component: ViewProductComponent}, 
        {path: 'sales-report', component: SalesReportComponent}, 
        {path: 'Inventory report',component: IvcReportComponent},
        {path: 'manager',component: ManagerComponent},
        {path: 'edit-manager/:id',component:EditManagerComponent},
        {path: 'expenses',component:ExpensesComponent},
        {path: 'finance',component:FinanceComponent},
        {path: 'income_statment',component:IncomeStatmentReporComponent},
        {path: 'finance_report',component:FinanceReportComponent}

    ]},   
    {path: '**', component: NoFoundPageComponent} //لازم تكون اخر شيء
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [MainHomeComponent,FeatursComponent,CostumersComponent,RegisterComponent,LogInComponent,EmployeWhsComponent,EmployeeSalesComponent, ViewInv,
    ProductReportComponent,HomePageComponent, ViewProductComponent , AddProductComponent, 
    TagComponent ,ChartsComponent, ViewTagComponent , AddTagComponent , ProductComponent , 
    EmpolyeeComponent,NoFoundPageComponent, ManagerComponent, MyFormComponent, HeaderComponent, 
    ViewEmpComponent , AddEmpComponent , TagComponent, SalesReportComponent ,IvcReportComponent, 
    EditManagerComponent,ExpensesComponent, IncomeStatmentReporComponent,FinanceComponent,
    FinanceReportComponent];
