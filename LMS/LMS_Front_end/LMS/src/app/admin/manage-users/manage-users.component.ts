import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  
  msg: string;
  userDetails;
  selectedUser;
  constructor(private admin: AdminService, private router: Router) {
    this.getData();
   }
  ngOnInit() {
    this.getData();
    }
    getData() {
    this.admin.viewAllUser().subscribe(Data => {
      console.log('Response of login', Data);
      if (Data && Data.description === 'ALL Data Found') {
        localStorage.setItem('userDetails', JSON.stringify(Data));
        this.userDetails = Data.user;
        if (this.userDetails.userType === 1){
          this.userDetails.userType = 'Admin';
        } else if (this.userDetails.userType === 2) {
          this.userDetails.userType = 'Librarian';
        } else {
          this.userDetails.userType = 'Student';
        }
     }
    }, err => {
      console.log(err);
      this.msg = err.description;
    });
  }
    deleteData(user) {
      console.log('delete', user);
      this.admin.deleteUser(user).subscribe(Data => {
        console.log('Response of delete', Data);
        if (Data && Data.description === 'Data Modified ') {
          this.msg = Data.description;
          this.ngOnInit();
        }
    }, err => {
      console.log(err);
      this.msg = err.description;
    }, () => {
      console.log('Data deleted');
    });
    }
    selectData(user){
      this.selectedUser = user;
    }
   updateUser(form: NgForm) {
      this.msg = null;
      this.admin.updateUser(form.value)
      .subscribe(Data => {
        this.msg = Data.description;
        console.log('Response after updatin user', Data);
        if (Data && Data.description === 'Data Modified') {
          this.router.navigateByUrl('/manageusers');
          this.ngOnInit();
        } else {
          this.router.navigateByUrl('/manageusers');
        }
        form.reset();
      }, err => {
        console.log(err);
        this.msg = err.Data.description;
      });
    }

}
