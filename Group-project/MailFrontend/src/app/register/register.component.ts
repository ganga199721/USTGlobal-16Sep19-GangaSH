import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  registerUser(form: NgForm) {
    this.msg = null;
    console.log(form.value);
    this.auth.registerUser(form.value)
    .subscribe(Data => {
      this.msg = Data.discription;
      console.log('Response after adding user', Data);
      if (Data && Data.discription === 'Registration Done Successfully') {
        this.router.navigateByUrl('/register');
      } else {
        this.router.navigateByUrl('/register');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.discription;
    });
  }
}
 