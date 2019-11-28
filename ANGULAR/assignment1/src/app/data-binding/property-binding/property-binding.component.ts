import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  name: string = 'Sanmathi';
  imgaUrl = 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682_960_720.jpg'
  address: string = 'Mangalore Bangalore' ;
  colorName: string = 'blue';
  isActive: boolean = false;
  colSpanValue = 2;

  constructor() {
    setInterval( () =>
    {
      this.isActive = !this.isActive;
    }, 2000);
  }

   

ngOnInit() {
    setInterval( () =>
    {
      this.colorName = 'red';
    }, 2000);
  }

}
