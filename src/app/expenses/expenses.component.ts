import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';
import { Expenses } from './expenses.model';

import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expenses = new Expenses;

  months = [1,2,3,4,5,6,7,8,9,10,11,12]; 
  years =[(new Date).getFullYear()];
  exp:boolean =false;
  title:string = 'مصروفات أخرى';


  constructor(private fb: FormBuilder,public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
   
  }

 

onSubmit(expensesForm: NgForm) {
    this.expenses = expensesForm.value;
    let d1= new Date(this.expenses.year,this.expenses.month,1);
    d1.setDate(d1.getDate()-1);
    let date = this.expenses.month+'-'+this.expenses.year;

    firebase.database().ref(window.name+'/manager').child('xExpenses').child(date).set({
     expenses: (this.expenses.expenses/(d1.getDate()))
    }).then((res) =>{
      this.resetForm(expensesForm);
      this.flashMensaje.show('تم إضافة المصاريف بنجاح.',
      {cssClass: 'alert-success', timeout: 100000, 
      closeOnClick: true, showCloseBtn: true});
    });

}

resetForm(expensesForm?: NgForm){
  if (expensesForm != null){ 
    expensesForm.reset();
  }
  this.expenses = {
    $key: null,
    month: '',
    year: '',
    expenses: 0
  }
}

}
