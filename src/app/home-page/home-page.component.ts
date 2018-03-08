import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // <-- do not forget to import

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private fragment: string;

constructor(private route: ActivatedRoute)
 { }

ngOnInit() {
  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
}

ngAfterViewInit(): void {
  try {
    document.querySelector('#' + this.fragment).scrollIntoView();
  } catch (e) 
  { }
}
}