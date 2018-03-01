import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-tag',
  templateUrl: '../view-tag.component.html',
  styleUrls: ['./view-tag.component.css']
})
export class ViewTagComponent implements OnInit {

  constructor(private router:Router) { }
  name:String="أقلام  ";
  descriptioin:string="aa@aa.a";
  img:any='https://material.angular.io/assets/img/examples/shiba1.jpg';
  

  public items= [
    {'name' : 'tag!','id':'1','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'tag2','id':'2','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'tag3','id':'3','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'tag4','id':'4','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'product5','id':'5','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'product6','id':'6','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'product7','id':'7','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'},
    {'name' : 'product8','id':'8','img' :'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg'}
  ];
  
    ngOnInit() {
  }
    viewProduct(item)
    {
      confirm('inside the method'+item.id);
  
      this.router.navigate(['View_Tag',item.id]);
    }
    deletItem()
    {
      if(confirm(' عند حذفك للتصنيف سوف تحذف جميع المنتجات هذا التصنيف هل أنت متأكد من الحذف؟ '))
        console.log('deleted');
        else 
        console.log('not deleted');


    }


}
