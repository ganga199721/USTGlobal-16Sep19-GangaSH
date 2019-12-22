import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/library.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
msg;
  constructor(private library: LibraryService, private router: Router) { }

  ngOnInit() {
  }
  addBook(form: NgForm) {
    this.msg = null;
    this.library.addBook(form.value)
    .subscribe(Data => {
      this.msg = Data.description;
      console.log('Response after adding user', Data);
      if (Data && Data.description === 'Book Added') {
        this.router.navigateByUrl('/addbooks');
      } else {
        this.router.navigateByUrl('/addbooks');
      }
      form.reset();
    }, err => {
      console.log(err);
      this.msg = err.Data.description;
    });
  }
}
