import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  Products = [
    {
      name : 'iPhone',
      image : 'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__340.jpg',
      price : 59009

    },
    {
      name : 'Samsung',
      image : 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378__340.jpg',
      price : 12299

    },
    {
      name : 'Moto',
      image : 'https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422__340.jpg',
      price : 12299

    }
]
  constructor() {

  }

  ngOnInit() {
  }

}
