import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  msg: string;
  bookDetails;
  selectedBook;
  userid;
  userdetails;
  jsondata;
  requested = false;
  constructor(private book: BookService, private router: Router, private user: AuthService) {
    this.ngOnInit();
    console.log(this.userid);
   }
  ngOnInit() {
    this.getData();
    this.router.navigateByUrl('/viewbook');
    }
    getData() {
      this.userdetails = localStorage.getItem('userDetails');
      this.jsondata = JSON.parse(this.userdetails);
      this.userid = this.jsondata.user[0].user_id;
      this.book.viewAllBooks().subscribe(Data => {
      console.log('Response of login', Data);
      if (Data && Data.description === 'ALL Books Found') {
        localStorage.setItem('bookDetails', JSON.stringify(Data));
        this.bookDetails = Data.book;
     }
    }, err => {
      console.log(err);
      this.msg = err.description;
    });
  }
  confirm(book) {
  this.selectedBook = book;
  }
  requestBook(selectedBook) {
  this.book.requestBook(0, this.userid, selectedBook).subscribe(Data => {
    this.msg = Data.description;
    console.log('Response of request', Data);
    this.msg = Data.description;
    if (Data && Data.description === 'Request success') {
      this.ngOnInit();
     
    } else {
      this.ngOnInit();
    }
  }, err => {
  });
  }
  
}
