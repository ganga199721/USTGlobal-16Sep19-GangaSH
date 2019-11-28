import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcars',
  templateUrl: './childcars.component.html',
  styleUrls: ['./childcars.component.css']
})
export class ChildcarsComponent implements OnInit {

  constructor() { }
  @Input() car ;
  ngOnInit() {
  }

}
