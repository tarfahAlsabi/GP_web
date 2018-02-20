import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor() { }
  name:String="مكعب روكبيك  ";
  Id:String="44544445";
  SPrice:number=15;
  BPrice:number=5;
  quantity:number=100;
  description:string="لعبة ذكاء ";
  img:any='http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg';
  Tag:any="ألعاب ";
  
  ngOnInit() {
  }

}
