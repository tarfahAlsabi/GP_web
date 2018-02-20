import { Component } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import { FileValidators } from '../../input-file/file-validators';
@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent {
  rForm: FormGroup;
  post:any;
  discription :String="";
  name: String="";
  tagPhoto:any;
  
  constructor() { }


}
