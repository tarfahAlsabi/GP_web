import { Component, OnInit } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'view-tag',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ViewTag implements OnInit {

    constructor(private router:Router)  { }
public title="التصنيفات";
public AddBtn="إضافة تصنيف ";
public items= [
  {'name' : 'tag!','id':'1','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'tag2','id':'2','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'tag3','id':'3','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'tag4','id':'4','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'tag5','id':'5','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'tag6','id':'6','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
];

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
