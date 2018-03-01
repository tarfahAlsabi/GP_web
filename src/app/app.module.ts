import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
// import { MyErrorStateMatcher } from './empolyee/add-emp/add-emp.component';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { InputFileComponent } from './input-file/input-file.component';
import { AddQuantityComponent } from './add-quantity/add-quantity.component';
import { EmpolyeeComponent } from'./empolyee/empolyee.component';
import { AddEmpComponent } from'./empolyee/add-emp/add-emp.component';
import { ViewEmpComponent } from'./empolyee/view-emp/view-emp.component';
import {viewTag} from './tag/tag.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { InvComponent } from './product/inv/inv.component';
import { addQuantity } from './product/inv/inv.component';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    InputFileComponent,
    AddQuantityComponent,
    EmpolyeeComponent,
    AddEmpComponent,
    ViewEmpComponent,
    viewTag,
    addQuantity,
   
  ],
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    CdkTableModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CoreModule
  ],
  entryComponents: [viewTag,routingComponents[routingComponents.length-1] , addQuantity,InvComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);


