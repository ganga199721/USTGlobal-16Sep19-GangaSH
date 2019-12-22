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
  userid ;
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
      // sessionStorage.setItem('userDetails', JSON.stringify(Data));
      localStorage.setItem('userDetails', JSON.stringify(Data));
      if (Data.user[0].userType === 1) {
        this.router.navigateByUrl('/adminhome');
      } else if (Data && Data.user[0].userType === 3) {
        this.router.navigateByUrl('/studentHome');
      } else if (Data && Data.user[0].userType === 2) {
        this.router.navigateByUrl('/library');
       }else {
        this.router.navigateByUrl('/');
      }
    }
      form.reset();
      this.msg = "Invalid Credentials";
    }, err => {
    });
  }

}
