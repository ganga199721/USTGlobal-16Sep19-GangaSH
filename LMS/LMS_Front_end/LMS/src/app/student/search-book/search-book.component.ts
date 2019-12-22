import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
bookdetails;
msg;
  constructor(private book: BookService) { }
  getData(form: NgForm) {
    console.log(form.value)
    this.book.searchBookByName(form.value).subscribe(Data => {
      console.log('Response of login', Data);
      if (Data && Data.description === 'Book Found') {
        localStorage.setItem('bookDetails', JSON.stringify(Data));
        this.bookdetails = Data.book;
      }
      else{
        this.msg = Data.description;
      }
    }, err => {
      this.msg = err.description;
    });
  }
  ngOnInit() {
  }

}
