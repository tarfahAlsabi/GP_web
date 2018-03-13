import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import { FileValidators } from '../../input-file/file-validators';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';

import { ProductService } from '../shared/product.service';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({ 
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers :[ProductService]
})
export class AddProductComponent  {

  selectedFiles: FileList;
  num: number;
  temp: string;
  
  constructor(private productService : ProductService, private route: ActivatedRoute,
  private router:Router,public flashMensaje: FlashMessagesService) {}
  
  
  ngOnInit() {
    this.productService.getData();
    this.resetForm();
    this.temp = this.route.snapshot.params.id;
    if((this.temp != '') && (this.temp != ':id')){
      this.onEdit();
      console.log(this.temp);
      console.log('s');
    }

  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
}
 
  onSubmit(productForm: NgForm) {
    
    if(this.selectedFiles){

      const file = this.selectedFiles.item(0);
      const storageRef = firebase.storage().ref(file.name);
      const uploadTask = storageRef.put(file); 
  
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          // upload in progress
         this.num = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
        },
        (error) => {
          // upload failed
          console.log(error) 
        },
        () => {
          // upload success
          if (productForm.value.$key == null){
            this.productService.insertProduct(productForm.value,uploadTask.snapshot.downloadURL,file.name);
            this.resetForm(productForm); 
            this.router.navigate(['product']);
          //  this.tostr.success('Submitted Succcessfully', 'product is added');
          }else{
            this.productService.updateProduct(productForm.value,uploadTask.snapshot.downloadURL,file.name);
            this.resetForm(productForm); 
            this.router.navigate(['product']);
          //  this.tostr.success('Submitted Succcessfully', 'product is updated');
          }    
        });
    }else{
      if (productForm.value.$key == null){
        this.productService.insertProduct(productForm.value,'none','none');
        this.resetForm(productForm); 
        this.router.navigate(['mainPage/product']).then( (res) => {
          this.flashMensaje.show('تم إضافة المنتج بنجاح.',
          {cssClass: 'alert-success', timeout: 4000});
        });
     //   this.tostr.success('Submitted Succcessfully', 'product is added');
      }else{
        this.productService.updateProduct(productForm.value,'none','none');
        this.resetForm(productForm); 
        this.router.navigate(['mainPage/product']).then( (res) => {
          this.flashMensaje.show('تم تحديث بيانات المنتج بنجاح.',
          {cssClass: 'alert-success', timeout: 4000});
        });
     //   this.tostr.success('Submitted Succcessfully', 'product is updated');
      }    
    }
     } 

     onEdit() {
      let tempArray = this.temp.split(",");
      let $key= tempArray[0];
      let name = tempArray[1];
      let category = tempArray[2];
      let cost  = Number(tempArray[3]);
      let description = tempArray[4];
      let inventory = Number(tempArray[5]);
      let picName = tempArray[6];
      let picPath = tempArray[7];
      let price = Number(tempArray[8]);

    let pp:Product ={$key,name,category,cost,price,picPath,inventory,picName,description};
      this.productService.selectedProduct = Object.assign({}, pp);
      //this.router.navigate(["Add_Product"]);
    }

     
    cancel(){
      this.resetForm();
      this.router.navigate(['product']);
    }

  resetForm(productForm?: NgForm) {
    if (productForm != null){
       productForm.reset();
       this.num = null;
       this.selectedFiles = null;
    }
    this.productService.selectedProduct = {
      $key: null,
      name: '',
      price  : null,
      cost  : null,
      inventory : null,
      description : '',
      category : '',// drop down menu
      picPath : '', 
      picName : '',

    }
  }
 
}