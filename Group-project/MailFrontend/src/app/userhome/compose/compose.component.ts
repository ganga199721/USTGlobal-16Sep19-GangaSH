import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InboxService } from 'src/app/inbox.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor(private inbox: InboxService, private router: Router) { }
  msg;
  ngOnInit() {
  }
  compose(form: NgForm) {
    this.msg = null;
    console.log(form.value);
    this.inbox.compose(form.value)
    .subscribe(Data => {
      this.msg = Data.discription;
      console.log('Response after adding user', Data);
      if (Data && Data.discription === 'mail composed') {
        this.router.navigateByUrl('/compose');
      } else {
        this.router.navigateByUrl('/compose');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.discription;
    });
  }
}
