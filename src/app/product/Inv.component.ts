import { Component, OnInit } from '@angular/core';
import { print } from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'view-Inv',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ViewInv implements OnInit {
constructor(private router:Router)  { }
public title="المخزون ";
public AddBtn="إضافة كمية للمخزون ";
public items= [
  {'name' : 'product!','id':'1','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product2','id':'2','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product3','id':'3','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product4','id':'4','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product5','id':'5','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product6','id':'6','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product7','id':'7','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product8','id':'8','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product9','id':'9','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product10','id':'10','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product11','id':'11','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
  {'name' : 'product12','id':'12','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'}

];

  ngOnInit() {
}
viewProduct(item)
{
  confirm('inside the method'+item.id);

  this.router.navigate(['View_Producct',item.id]);
}
deletItem(item)
{
  confirm('inside the method'+item.id);
  
}
  Add()
  {
      this.router.navigate(['/Add_Product']);
  }
}