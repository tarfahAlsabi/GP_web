import { Component } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import { FileValidators } from '../input-file/file-validators';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent   {

 rForm: FormGroup;
 post:any;
 discription :String="";
 name: String="";
 tagPhoto:any;
 

}
