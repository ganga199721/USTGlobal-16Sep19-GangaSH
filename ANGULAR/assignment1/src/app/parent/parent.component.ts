import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedCar = '';
Cars = [
{
  imageUrl :'https://cdn.pixabay.com/photo/2016/09/11/10/02/auto-1661009__340.jpg',
  name : 'car1'
},
{
  imageUrl :'https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402__340.jpg',
  name : 'Car 2'
},
{
  imageUrl :'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
  name : 'car 3'
},
{
  imageUrl :'https://cdn.pixabay.com/photo/2018/05/02/09/29/auto-3368094__340.jpg',
  name : 'car 4'
},



]
  constructor() { }

  ngOnInit() {
  }
  sendCar(car) {
    console.log(car);
    this.selectedCar=car;
  }
}
