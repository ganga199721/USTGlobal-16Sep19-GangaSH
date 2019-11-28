import { Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , DoCheck , AfterViewInit , AfterViewChecked , OnDestroy {
Users;
selectedUser;
today = new Date();
  constructor(public service: UserService) {
    console.log('constructor is executed');
    this.getData(); // to call getdata from service
   }

  ngOnInit() {
    console.log('ngOnInit executed');
    }
    ngDoCheck() {
    console.log('ngDoCheck executed');

    }
    ngAfterViewInit() {
    console.log('ngAfterViewInit executed');

    }
    ngAfterViewChecked() {
    console.log('ngAfterViewChecked executed');

    }

    ngOnDestroy(){
    console.log('ngOnDestroy executed');

    }

     loginData(form: NgForm) {
     console.log(form.value);
     this.service.postUser(form.value).subscribe(data => {
       console.log(data);
     } , err => {
      console.log(err);
    }, () => {
      console.log('data posted successfully');
    });
  }
  getData() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.Users = data;
    } , err => {
     console.log(err);
    }, () => {
    console.log('data posted successfully');
    });
  }
  deleteData(user) {
    console.log('delete', user);
    this.service.deleteUser(user.id).subscribe(data => {
    console.log(data);
    this.getData();
  }, err => {
    console.log(err);
  }, () => {
    console.log('Data deleted');
  });
  }
  selectUser(user) {
    console.log('update ',user);
    this.selectedUser = user;
  }
  updateData(form) {
    console.log(form.value);
    this.service.updateUser(form.value.id , form.value).subscribe(data => {
      console.log('updated',data);
      this.getData();
    }, err => {
      console.log(err);
    }, () => {
      console.log('Data updateds');
    });
  }
}
