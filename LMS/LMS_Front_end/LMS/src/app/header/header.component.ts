import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  isLoggedIn() {
    const userDetails  = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      return true;
    } else {
      return false;
    }
  }
  isAdmin() {
    const userDetails  = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.user[0].userType === 1 ) {
      return true;
    } else {
      return false;
    }
  }
  isLibrary() {
    const userDetails  = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.user[0].userType === 2 ) {
      return true;
    } else {
      return false;
    }
  }
  isStudent() {
    const userDetails  = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails && userDetails.user[0].userType === 3 ) {
      return true;
    } else {
      return false;
    }
  }
  
  logout() {
    localStorage.removeItem('userDetails');
    this.router.navigateByUrl('/');
  }
  ngOnInit() {
  }

}
