import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg;
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
  }
  login(form: NgForm) {
    this.msg = null;
    console.log(form.value);
    this.auth.loginUser(form.value).subscribe(Data => {
      this.msg = Data.description;
      console.log('Response of login', Data);
      if (Data && Data.description === 'Login Successfully') {
        localStorage.setItem('userDetails', JSON.stringify(Data))
        this.router.navigateByUrl('/userhome');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    })
  }
}
