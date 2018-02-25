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
import { InvComponent } from './product/inv/inv.component';
import { addQuantity } from './product/inv/inv.component';


import { TagComponent } from './tag/tag.component';
import { AddTagComponent } from './tag/add-tag/add-tag.component';
import { ViewTagComponent } from './tag/view-tag/view-tag.component';



import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
    {path: 'empolyee' , component: EmpolyeeComponent },
    {path: 'product', component: ProductComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'tags', component: TagComponent},
    {path: 'inventory', component: InvComponent},
    {path: 'addQuantity', component: ViewInv},
    {path: 'charts', component: ChartsComponent},
    {path: 'Add_employee', component: AddEmpComponent},
    {path: 'Add_Tag', component: AddTagComponent},
    {path: 'Add_Product', component: AddProductComponent},
    {path: 'View_employee/:id', component: ViewEmpComponent},
    {path: 'View_Tag/:id', component: ViewTagComponent},
    {path: 'View_Producct/:id', component: ViewProductComponent} ];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [ ViewInv , ViewProductComponent , AddProductComponent , TagComponent ,ChartsComponent,
    ViewTagComponent , AddTagComponent , ProductComponent , EmpolyeeComponent,InvComponent,
    MyFormComponent, HeaderComponent, ViewEmpComponent , AddEmpComponent , TagComponent ];
