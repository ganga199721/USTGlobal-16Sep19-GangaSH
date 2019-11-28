import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 addCandidate(form: NgForm) {
    console.log(form);
  }
}
