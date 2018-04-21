import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';

import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Finance } from './finance.model';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
title:string = 'الأصول والخصوم';
finance: Finance =new Finance;

  constructor(private fb: FormBuilder,public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
    console.log(firebase.database().ref(window.name+'manager').child('xFinance'))
    //console.log('pass')
  }

  onSubmit(financeForm: NgForm) {
    this.finance = financeForm.value;
    
    if(!this.finance.bank && !this.finance.box){
      this.flashMensaje.show('(أرجو إدخال أحد الأصول المتداول على الأقل (الصندوق,البنك.',
      {cssClass: 'alert-danger', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
    }else{
      if(!this.finance.Debtors){
        this.finance.Debtors=0;
      }
  
      if(!this.finance.fixedAssets){
        this.finance.fixedAssets=0;
      }
  
      if(!this.finance.Loans){
        this.finance.Loans=0;
      }
  
      if(!this.finance.creditors){
        this.finance.creditors=0;
      }

     if(!this.finance.bank){
        this.finance.bank=0;
      }

      if(!this.finance.box){
        this.finance.box=0;
      }
      
    firebase.database().ref(window.name+'/manager').child('xFinance').set({
      box: this.finance.box,
      bank: this.finance.bank,
      Debtors: this.finance.Debtors,
      fixedAssets: this.finance.fixedAssets,
      capital: this.finance.capital,
      Loans: this.finance.Loans,
      creditors: this.finance.creditors
    });
  
    }
    }

    resetForm(financeForm?: NgForm){
      if (financeForm != null){ 
        financeForm.reset();
      //  this.startDate =new Date();  
       // this.endDate =new Date();  
      }
      this.finance = {
        $key: null,
        box: 0,
        bank: 0,
        Debtors: 0,
        fixedAssets: 0,
        capital: 0,
        Loans: 0,
        creditors: 0
      }
    }
   

}
