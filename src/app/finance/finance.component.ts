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
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
title:string = 'الأصول والخصوم';
finance: Finance =new Finance;

  constructor(private fb: FormBuilder,public flashMensaje: FlashMessagesService,
    private firebase: AngularFireDatabase) { }

  ngOnInit() {
    this.firebase.object(window.name+'/manager/xFinance').snapshotChanges().subscribe(ob =>{
      let x = ob.payload.toJSON();
      x["$key"] = ob.key;
      this.finance = x as Finance; 
    });
  }

  onSubmit(financeForm: NgForm) {
    this.finance = financeForm.value;
    
    if(!this.finance.bank && !this.finance.box){
      this.flashMensaje.show('(يرجى إدخال أحد الأصول المتداول على الأقل (الصندوق,البنك.',
      {cssClass: 'alert-danger', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
    }else{
      if(!this.finance.Debtors){
        this.finance.Debtors=0;
      }
  
      if(!this.finance.fixedAssets){
        this.finance.fixedAssets=0;
      }
  
      if(!this.finance.loans){
        this.finance.loans=0;
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
      Loans: this.finance.loans,
      creditors: this.finance.creditors
    }).then((res)=>{
      this.flashMensaje.show('تمت العملية بنجاح.',
      {cssClass: 'alert-success', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
    });
  
    }
    }

    resetForm(financeForm?: NgForm){
      if (financeForm != null){ 
        financeForm.reset();
      
      }
      this.finance = {
        $key: null,
        box: 0,
        bank: 0,
        Debtors: 0,
        fixedAssets: 0,
        capital: 0,
        loans: 0,
        creditors: 0
      }
    }
   

}
