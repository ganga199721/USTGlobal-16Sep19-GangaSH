import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  viewAllBooks(): Observable <any>{
    return this.http.get<any>(`http://localhost:8080/lms/view-all-books`);
  }
  requestBook(status, sid, selectedBook): Observable <any>{
    return this.http.get<any>(`http://localhost:8080/lms/requestbook/${status}/${sid}/${selectedBook.bid}`);
  }
  searchBookByName(book){
    return this.http.get<any>(`http://localhost:8080/lms/search-book/${book.bname}`);
  }
}

