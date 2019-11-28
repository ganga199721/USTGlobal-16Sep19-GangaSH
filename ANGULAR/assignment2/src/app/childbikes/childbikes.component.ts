import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childbikes',
  templateUrl: './childbikes.component.html',
  styleUrls: ['./childbikes.component.css']
})
export class ChildbikesComponent implements OnInit {

  constructor() { }
  @Input() bike ;
  ngOnInit() {
  }

}
