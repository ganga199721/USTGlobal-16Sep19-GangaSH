import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcars',
  templateUrl: './parentcars.component.html',
  styleUrls: ['./parentcars.component.css']
})
export class ParentcarsComponent implements OnInit {

selectedCar = '';
Cars = [
{
  imageUrl :'https://cdn.pixabay.com/photo/2016/09/11/10/02/auto-1661009__340.jpg',
  name : 'Maruthi',
  model : 'Model :1945',
  // tslint:disable-next-line: max-line-length
  description : 'The Maruti Swift has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'


},
{
  imageUrl :'https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402__340.jpg',
  name : 'Suzuki',
  model : 'Model :1885',
  // tslint:disable-next-line: max-line-length
  description : 'The Suzuki has 1 kerosine Engine and 1 Diesel Engine on offer. The Diesel engine is 1248 cc while the kersine engine is 466 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Suzuki is a 5 seater Hatchback and has a length of 3840mm.'
},
{
  imageUrl :'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
  name : 'Lamborghini',
  model : 'Model :2010',
  // tslint:disable-next-line: max-line-length
  description : 'The Lamborghini Swift has 1 Lamborghini Engine and 1 Lamborghini Engine on offer. The Diesel engine is 5000 cc while the Petrol engine is 5000 cc. Depending upon the variant and fuel type the Swift has a mileage of 3.0 to 5.0 kmpl. The Swift is a 5 seater Hatchback and has a length of 5000.'
},
{
  imageUrl :'https://cdn.pixabay.com/photo/2018/05/02/09/29/auto-3368094__340.jpg',
  name : 'Audi A3',
  model : 'Model : 2015',
  // tslint:disable-next-line: max-line-length
  description : 'Audi A3 Variants & Price: The Audi A3 is available in two variants: Premium Plus and Technology, priced from Rs 28.99 lakh to 31.99 lakh (ex-showroom pan-India). Audi A3 Engines: The A3 comes with a 1.4-litre TFSI turbocharged petrol engine that makes 150PS of power and 250Nm.'

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
