import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
msg
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  updateUser(form: NgForm) {
    this.msg = null;
    console.log(form.value)
    this.auth.updatePassword(form.value)
    .subscribe(Data => {
      this.msg = Data.description;
      console.log('Response after updating user', Data);
      if (Data && Data.description === 'Data Modified') {
        this.router.navigateByUrl('/changepassword');
        this.ngOnInit();
      } else {
        this.router.navigateByUrl('/changepassword');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    });
  }
}
