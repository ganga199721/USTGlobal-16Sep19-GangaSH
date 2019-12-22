import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LibraryService } from 'src/app/library.service';


@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  msg: string;
  bookDetails;
  selectedBook;
  userid;
  userdetails;
  jsondata;
  status;
  requested = false;
  constructor(private library: LibraryService, private router: Router) {
    console.log(this.userid);
   }
  ngOnInit() {
    this.getRequestBook();
    }
  getRequestBook() {
  this.library.getRequestBook().subscribe(Data => {
    this.bookDetails = Data.book;
    console.log('Response of request', Data);
    if (Data && Data.description === 'Request success') {
      this.router.navigateByUrl('/issuebook');
    } else {
      this.router.navigateByUrl('/issuebook');
      this.msg = Data.description;
    }
  }, err => {
  });
  }
  getRequestStudent(){
    this.library.getRequestStudent().subscribe(Data => {
      this.userdetails = Data.user;
      console.log('Response of request', Data);
      if (Data && Data.description === 'Request success') {
        this.ngOnInit();
        this.router.navigateByUrl('/issuebook');
      } else {
        this.router.navigateByUrl('/issuebook');
        this.msg = Data.description;
      }
    }, err => {
    });
    }
    confirm(book) {
      this.selectedBook = book;
      }
      issueBook(selectedBook) {
        this.status = 1;
        this.library.issueBook(selectedBook, this.status).subscribe(Data => {
          console.log('Response of request', Data);
          this.msg = Data.description;
          if (Data && Data.description === 'Book issued') {
            this.router.navigateByUrl('/issuebook');
            this.ngOnInit();
            this.requested = true;
          } else {
            this.router.navigateByUrl('/issuebook');
            this.msg = Data.description;
          }
        }, err => {
        });
        }
        declineBook(selectedBook) {
          this.status = 1;
          this.library.declineBook(selectedBook, this.status).subscribe(Data => {
            console.log('Response of request', Data);
            if (Data && Data.description === 'Book issued') {
              this.router.navigateByUrl('/issuebook');
              this.requested = true;
            } else {
              this.router.navigateByUrl('/issuebook');
              this.msg = Data.description;
            }
          }, err => {
          });
          }
  }


