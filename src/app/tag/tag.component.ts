import { Component, OnInit, Inject } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private router:Router , public dialog: MatDialog)  { }
  name: string;
  public title="التصنيفات";
  public AddBtn="إضافة تصنيف ";
  public items= [
    {'name' : 'أقلام','id':'1'},
    {'name' : 'دفاتر','id':'2'},
    {'name' : 'كتب','id':'3'},
    {'name' : 'ألعاب','id':'4'},
    {'name' : 'غير ذلك','id':'6'},
  ];
  
  openDialog(item): void {
    let dialogRef = this.dialog.open(viewTag, {
      width: '50%',
      data: { name: item.name,a:item.id } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      item.name = result;
    });
  }

    ngOnInit() {
  }
    viewProduct(item)
    {
      confirm('inside the method'+item.id);
  
      this.router.navigate(['View_Tag',item.id]);
    }
    deletItem(item)
    {
      this.router.navigate(['/Add_Tag']);
    }
      Add()
      {
          this.router.navigate(['/Add_Tag']);
      }


  }
  

  @Component({
    selector: 'view-tag',
    templateUrl: 'view-tag.component.html',
    styleUrls: ['./tag.component.css']
  })
  export class viewTag {
  
    name:string;
    newname:string;
    constructor(
      public dialogRef: MatDialogRef<viewTag>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    
    delete()
    {

    }
  
  }
  