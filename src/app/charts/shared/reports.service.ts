import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Receipt, InnerProduct } from './receipt.model';
import { element } from 'protractor';

@Injectable()
export class ReportsService {
allReceipts: AngularFireList<any>;
receiptList : Receipt[];
receipt: Receipt = new Receipt;
products: InnerProduct[];
  constructor(private firebase: AngularFireDatabase) { }

  getData(){ 
    this.allReceipts = this.firebase.list(window.name+'/receipts');
    return this.allReceipts;
  }


}
