import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentlaptops',
  templateUrl: './parentlaptops.component.html',
  styleUrls: ['./parentlaptops.component.css']
})
export class ParentlaptopsComponent implements OnInit {

selectedLaptop = '';
Laptops = [
{
  imageUrl : 'https://cdn.pixabay.com/photo/2014/09/27/13/44/notebook-463485__340.jpg',
  name : 'Asus ROG Gaming',
  price : 'Rs : 53000',
  // tslint:disable-next-line: max-line-length
  description : 'ASUS Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'

},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2015/07/26/17/29/mixer-861431__340.jpg',
  name : 'HP Pavillion',
  price : 'Rs : 40000',
  // tslint:disable-next-line: max-line-length
  description : 'ASUS Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'

},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2017/08/10/07/32/dell-2619501__340.jpg',
  name : 'Dell Vostro',
  price : 'Rs : 40000',
  // tslint:disable-next-line: max-line-length
  description : 'ASUS Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'

},



]
  constructor() { }

  ngOnInit() {
  }
  sendLaptop(laptop) {
    console.log(laptop);
    this.selectedLaptop = laptop;
  }

}
