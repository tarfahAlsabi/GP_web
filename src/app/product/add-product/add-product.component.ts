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

@Component({ 
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers :[ProductService]
})
export class AddProductComponent  {

  selectedFiles: FileList;
  num: number;
  
  constructor(private productService : ProductService) {}
  
  
  ngOnInit() {
    this.productService.getData();
    this.resetForm();
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
          //  this.tostr.success('Submitted Succcessfully', 'product is added');
          }else{
            this.productService.updateProduct(productForm.value,uploadTask.snapshot.downloadURL,file.name);
            this.resetForm(productForm); 
          //  this.tostr.success('Submitted Succcessfully', 'product is updated');
          }    
        });
    }else{
      if (productForm.value.$key == null){
        this.productService.insertProduct(productForm.value,'none','none');
        this.resetForm(productForm); 
     //   this.tostr.success('Submitted Succcessfully', 'product is added');
      }else{
        this.productService.updateProduct(productForm.value,'none','none');
        this.resetForm(productForm); 
     //   this.tostr.success('Submitted Succcessfully', 'product is updated');
      }    
    }
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