import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  get movie() {
    return  this.form.get('movie');
  }
  get title() {
    return  this.form.get('title');
  }
  get url() {
    return  this.form.get('url');
  }
  get desc() {
    return  this.form.get('desc');
  }
  constructor() { 

  }
  form = new FormGroup({
    movie : new FormControl('' , [Validators.required]),
    title: new FormControl('' , [Validators.required]),
    url : new FormControl('' ,[Validators.required]),
    desc : new FormControl('' ,[Validators.required])
    
  });
  ngOnInit() {
  }

}