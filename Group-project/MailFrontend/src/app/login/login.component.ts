import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.msg = null;
    console.log(form.value);
    this.auth.loginUser(form.value).subscribe(Data => {
      this.msg = Data.description;
      console.log('Response of login', Data);
      if (Data && Data.description === 'Data Found') {
        localStorage.setItem('userDetails', JSON.stringify(Data))
        this.router.navigateByUrl('/student')
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    })
  }
}
