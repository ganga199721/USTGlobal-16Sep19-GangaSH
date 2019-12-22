import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  msg: string;
  constructor(private admin: AdminService, private router: Router) { }

  ngOnInit() {
  }
  addUser(form: NgForm) {
    this.msg = null;
    this.admin.addUser(form.value)
    .subscribe(Data => {
      this.msg = Data.description;
      console.log('Response after adding user', Data);
      if (Data && Data.description === 'User Added') {
        this.router.navigateByUrl('/adduser');
      } else {
        this.router.navigateByUrl('/adduser');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    });
  }
}
