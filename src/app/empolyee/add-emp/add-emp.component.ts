import { Component } from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatExpansionPanelDescription } from '@angular/material';
import { FileValidators } from '../../input-file/file-validators';
import {FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StateKey } from '@angular/platform-browser/src/browser/transfer_state';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})


export class AddEmpComponent  {
rForm:FormGroup;
Email:any;
Fname:string;
Lname:String;
ID:number;
salary:number;
phone:number;

constructor(private fb: FormBuilder)
{
  
  this.rForm=fb.group({
    'Email':['', Validators.compose([ Validators.required , Validators.email])],
    'Fname':['' , Validators.required],
    'Lname':['' , Validators.required],
    'ID':['',Validators.required],
    'salary':['',Validators.required],
    'phone':['',Validators.compose([ Validators.required, Validators.maxLength(10)])]
   })
}
addEmp(form)
{

}
}
