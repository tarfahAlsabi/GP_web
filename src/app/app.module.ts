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

import { ProductComponent } from './product/product.component';
import { addQuantity } from './product/product.component';

import { AngularFireAuthModule } from 'angularfire2/auth';

import { CoreModule } from './core/core.module';
import { TagComponent } from './tag/tag.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { updateSalary } from './empolyee/view-emp/view-emp.component';

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
    updateSalary,
   
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
    CoreModule,
    FlashMessagesModule
  ],
  entryComponents: [viewTag, TagComponent, addQuantity,ProductComponent, updateSalary, ViewEmpComponent ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);


