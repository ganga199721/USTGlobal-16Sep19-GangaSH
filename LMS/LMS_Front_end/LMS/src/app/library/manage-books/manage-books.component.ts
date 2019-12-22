import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LibraryService } from 'src/app/library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {
  msg: string;
  bookDetails;
  selectedBook;
  userid;
  userdetails;
  jsondata;
  requested = false;
  constructor(private book: BookService,private library:LibraryService, private router: Router, private user: AuthService) {
  
    console.log(this.userid);
  }

  getData() {
    this.userdetails = localStorage.getItem('userDetails');
    this.jsondata = JSON.parse(this.userdetails);
    this.userid = this.jsondata.user[0].user_id;
    this.library.viewAllBooks().subscribe(Data => {
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
  confirm(book){
    this.selectedBook=book;
  }
  deleteBook(selectedBook) {
   
    this.library.deleteBook(selectedBook).subscribe(Data => {
      this.msg = Data.description;
      console.log('Response of request', Data);
      this.msg = Data.description;
      if (Data && Data.description === 'Book deleted') {
        this.router.navigateByUrl('/managebook');
        this.requested = true;
        this.ngOnInit();
      } else {
        this.router.navigateByUrl('/managebook');
      }
    }, err => {
    });
    }


    updateBook(form: NgForm) {
      this.msg = null;
      this.library.updateBook(form.value)
      .subscribe(Data => {
        this.msg = Data.description;
        console.log('Response after updatin user', Data);
        if (Data && Data.description === 'Data Modified') {
          this.router.navigateByUrl('/managebook');
          this.ngOnInit();
        } else {
          this.router.navigateByUrl('/managebook');
        }
        form.reset();
      }, err => {
        console.log(err);
        this.msg = err.Data.description;
      });
    }
  ngOnInit() {
   this.getData();
  }

}
