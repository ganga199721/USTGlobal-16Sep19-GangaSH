import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  msg: string;
  userDetails;
  userType = 3;
  constructor(private admin: AdminService, private router: Router) {
   }
  ngOnInit() {
    this.admin.viewUser(this.userType).subscribe(Data => {
      this.msg = Data.description;
      console.log('Response of login', Data);
      if (Data && Data.description === 'ALL Data Found') {
        this.userDetails = Data.user;
     }
    }, err => {
      console.log(err);
      this.msg = err.description;
    });
  } 
}